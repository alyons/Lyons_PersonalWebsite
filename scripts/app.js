(function () {
  var app = angular.module("app", ['ngRoute']);
  var checkbox = document.getElementById('navmenu-trigger');

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/home", {
        // template:"<h1>Home</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/home.html";
        console.log("Home clicked: " + checkbox.checked);
      })
      .when("/projects", {
        // template:"<h1>Projects</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/projects.html";
        console.log("Projects clicked: " + checkbox.checked);
      })
      .when("/about", {
        // template:"<h1>About</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/about.html";
  	    cosole.log("About clicked: " + checkbox.checked);
      })
      .when("/contact", {
        // template:"<h1>Contact</h1>"
        // checkbox.checked = false;
        templateUrl: "pages/contact.html";
  	    cosole.log("Contact clicked: " + checkbox.checked);
      })
      .otherwise({
        redirectTo: "/home"
        // template: "<h1>Not Found</h1>"
      });
  });
})();
