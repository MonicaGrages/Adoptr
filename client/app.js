const angular = require("angular");
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module("AdoptrApp", ["ui.router", "ipCookie", "ng-token-auth"])
  .config(router, function($authProvider) {
    $authProvider.configure({
      apiUrl: '/',
      validateOnPageLoad: true
    });
});


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
    });

  $urlRouterProvider.otherwise("/");
}
