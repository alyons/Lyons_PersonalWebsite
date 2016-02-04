(function () {
  var app = angular.module("app", ['ngRoute']);
  var checkbox = document.getElementById('navmenu-trigger');
  var label = document.getElementById('navmenu-label');

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "pages/home.html",
        controller: function () {
          checkbox.checked = false;
          console.log("Home clicked: " + checkbox.checked);
        }
      })
      .when("/projects", {
        // template:"<h1>Projects</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/projects.html",
        controller: function () {
          checkbox.checked = false;
          console.log("Projects clicked: " + checkbox.checked);
        }
      })
      .when("/about", {
        // template:"<h1>About</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/about.html",
        controller: function () {
          checkbox.checked = false;
          console.log("About clicked: " + checkbox.checked);
        }
      })
      .when("/contact", {
        // template:"<h1>Contact</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/contact.html",
        controller: function () {
          checkbox.checked = false;
          console.log("Contact clicked: " + checkbox.checked);
        }
      })
      .otherwise({
        redirectTo: "/home"
        // template: "<h1>Not Found</h1>"
      });
  });
})();
