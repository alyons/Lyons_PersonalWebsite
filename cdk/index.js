const cdk = require('@aws-cdk/core');
const StaticSite = require('./StaticSite');

class StaticSiteStack extends cdk.Stack {
  constructor(parent, name, props) {
    super(parent, name, props);

    new StaticSite(this, 'StaticSite', {
      domain: this.node.tryGetContext('domain'),
      subDomain: this.node.tryGetContext('subDomain')
    });
  }
};

const app = new cdk.App();

new StaticSiteStack(app, 'PersonalWebsite', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});

app.synth();
