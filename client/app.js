console.log('app.js');


const angular = require("angular");
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module("AdoptrApp", ["ui.router", "ipCookie", "ng-token-auth"])
  .config(router, function($authProvider) {
    $authProvider.configure({
      apiUrl: '/',
      validateOnPageLoad: false
    });
});


router.$inject = ["$stateProvider", "$urlRouterProvider"];
function router ($stateProvider, $urlRouterProvider) {
  console.log("In the Router!")
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
    });

  $urlRouterProvider.otherwise("/");
}
