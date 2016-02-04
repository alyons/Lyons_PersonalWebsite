(function () {
  var app = angular.module("app", ['ngRoute']);
  var checkbox = document.getElementById('navmenu-trigger')

  app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
      // template:"<h1>Home</h1>"
      checkbox.checked = false;
      templateUrl: "pages/home.html"
    })
    .when("/projects", {
      // template:"<h1>Projects</h1>"
      checkbox.checked = false;
      templateUrl: "pages/projects.html"
    })
    .when("/about", {
      // template:"<h1>About</h1>"
      checkbox.checked = false;
      templateUrl: "pages/about.html"
    })
    .when("/contact", {
      // template:"<h1>Contact</h1>"
      checkbox.checked = false;
      templateUrl: "pages/contact.html"
    })
    .otherwise({
      redirectTo: "/home"
      // template: "<h1>Not Found</h1>"
    });
  });

})();
