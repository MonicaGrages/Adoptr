const angular = require("angular");
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module("AdoptrApp", ["ui.router", "ipCookie", "ng-token-auth"])
  .config(router, auth);

auth.$inject = ["$authProvider"];
function auth($authProvider) {
    $authProvider.configure({
      apiUrl: '/',
      validateOnPageLoad: false
    });
}

router.$inject = ["$stateProvider", "$urlRouterProvider"];
function router ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("petSearch", {
      url: "/",
      template: "<pet-search></pet-search>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state("signIn", {
      url: "/sign_in",
      template: "<sign-in></sign-in>"
    })
    .state("userRegistration", {
      url: "/user_registration",
      template: "<user-registration></user-registration>"
    })
    .state("favorites", {
      url: "/users/:userId/favorites",
      template: "<favorites></favorites>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state("petShow", {
      url: "/pets/:id",
      template: "<pet-show></pet-show>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state("userShow", {
      url: "/users/:id",
      template: "<user-show></user-show>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state("enterPreferences", {
      url: "/user_preferences",
      template: "<enter-preferences></enter-preferences>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    });


  $urlRouterProvider.otherwise("/");
}
