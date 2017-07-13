const angular = require("angular");
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");
require('angular-messages');
require('angular-material');
require('angular-aria');
require('angular-animate');
require('angular-socialshare');

angular.module("AdoptrApp", ["ui.router", "ipCookie", "ng-token-auth", "ngMessages", "ngMaterial", "ngAria", "ngAnimate", "720kb.socialshare"])
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
    .state("landingPage", {
      url: "/",
      template: "<landing-page></landing-page>"
    })
    .state("petSearch", {
      url: "/petSearch",
      template: "<pet-search></pet-search>",
      resolve: {
        auth: validateUser
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
        auth: validateUser
      }
    })
    .state("passes", {
      url: "/users/:userId/passes",
      template: "<passes></passes>",
      resolve: {
        auth: validateUser
      }
    })
    .state("petShow", {
      url: "/pets/:id",
      template: "<pet-show></pet-show>",
      resolve: {
        auth: validateUser
      }
    })
    .state("userShow", {
      url: "/users/:id",
      template: "<user-show></user-show>",
      resolve: {
        auth: validateUser
      }
    })
    .state("enterPreferences", {
      url: "/new_user_preferences",
      template: "<enter-preferences></enter-preferences>",
      resolve: {
        auth: validateUser
      }
    });


  $urlRouterProvider.otherwise("/");
}

validateUser.$inject = ["$auth"]
function validateUser($auth) {
  return $auth.validateUser();
}
