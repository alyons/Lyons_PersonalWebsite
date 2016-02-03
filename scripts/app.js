(function () {
  var app = angular.module("app", ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
      // template:"<h1>Home</h1>"
      templateUrl: "pages/home.html"
    })
    .when("/projects", {
      // template:"<h1>Projects</h1>"
      templateUrl: "pages/projects.html"
    })
    .when("/about", {
      // template:"<h1>About</h1>"
      templateUrl: "pages/about.html"
    })
    .when("/contact", {
      // template:"<h1>Contact</h1>"
      templateUrl: "pages/contact.html"
    })
    .otherwise({
      redirectTo: "/home"
      // template: "<h1>Not Found</h1>"
    });
  });

})();
