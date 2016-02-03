(function () {
  var app = angular.module("app", ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
      // template:"<h1>Home</h1>"
      templateUrl: "home.html"
    })
    .when("/projects", {
      template:"<h1>Projects</h1>"
    })
    .when("/about", {
      template:"<h1>About</h1>"
    })
    .when("/contact", {
      template:"<h1>Contact</h1>"
    })
    .otherwise({
      redirectTo: "/home"
      // template: "<h1>Not Found</h1>"
    });
  });

})();
