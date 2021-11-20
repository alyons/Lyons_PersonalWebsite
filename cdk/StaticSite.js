const acm = require('@aws-cdk/aws-certificatemanager');
const cdk = require('@aws-cdk/core');
const cloudfront = require('@aws-cdk/aws-cloudfront');
const cloudwatch = require('@aws-cdk/aws-cloudwatch');
const iam = require('@aws-cdk/aws-iam');
const route53 = require('@aws-cdk/aws-route53');
const s3 = require('@aws-cdk/aws-s3');
const s3deploy = require('@aws-cdk/aws-s3-deployment');
const targets = require('@aws-cdk/aws-route53-targets');

class StaticSite extends cdk.Construct {
  constructor(parent, name, props) {
    super(parent, name);

    const { domain, subDomain } = props;

    const zone = route53.HostedZone.fromLookup(this, 'Zone', { domainName: domain });
    const siteDomain = subDomain + '.' + domain;
    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(this, 'cloudfront-OAI', {
      comment: `OAI for ${name}`
    });

    new cdk.CfnOutput(this, 'Site', { value: `https://${siteDomain}` });

    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: siteDomain,
      websiteIndexDocument: 'index.html',
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Don't have enabled in production
      autoDeleteObjects: true // Don't have enabled in production
    });

    siteBucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [siteBucket.arnForObjects('*')],
      principals: [new iam.CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
    }));

    new cdk.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });

    const certificateArn = new acm.DnsValidatedCertificate(this, 'SiteCertificate', {
      domainName: siteDomain,
      hostedZone: zone,
      region: 'us-east-1' // Cloudfront on checks this region for certificates
    }).certificateArn;
    new cdk.CfnOutput(this, 'Certificate', { value: certificateArn });

    const viewerCertificate = cloudfront.ViewerCertificate.fromAcmCertificate({
      certificateArn: certificateArn,
      env: {
        region: cdk.Aws.REGION,
        account: cdk.Aws.ACCOUNT_ID
      },
      node: this.node,
      stack: parent,
      metricDaysToExpiry: () => new cloudwatch.Metric({
        namespace: "TLS Viewer Certificate Validity",
        metricName: "TLS Viewer Certificate Expired",
      })
    }, {
      sslMethod: cloudfront.SSLMethod.SNI,
      securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      aliases: [siteDomain]
    });

    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'SiteDistribution', {
      viewerCertificate,
      originConfigs: [{
        s3OriginSource: {
          s3BucketSource: siteBucket,
          originAccessIdentity: cloudfrontOAI
        },
        behaviors: [{
          isDefaultBehavior: true,
          compress: true,
          allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD_OPTIONS
        }]
      }]
    });
    new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });

    new route53.ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      zone
    });

    new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [s3deploy.Source.asset('./dist')],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*']
    });
  };
};

module.exports = StaticSite;
