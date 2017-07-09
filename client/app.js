const angular = require("angular");
require("angular-ui-router");

angular.module("AdoptrApp", ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
  console.log('hello');
  $stateProvider
    .state("petSearch", {
      url: "/",
      template: "<pet-search></pet-search>"
    });
    // .state("artist", {
    //   url: "/artist/:id",
    //   template: "<tunr-artist></tunr-artist>"
    // })
    // .state("newArtist", {
    //   url: "/artist/new",
    //   template: "<tunr-new-artist></tunr-new-artist>"
    // });

  $urlRouterProvider.otherwise("/");
}
