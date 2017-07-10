const angular = require("angular");

FavoritesService.$inject = ["$http"];

function FavoritesService ($http) {
  const service = this;

  service.getFavorites = function (userId) {
    return $http.get("/users/"+userId+"/favorites")
    .then(response => {
      return response.data;
    });
  };

  // service.getArtist = function (id) {
  //   return $http.get("/artist/" + id).then(res => {
  //     return res.data;
  //   });
  // };

  // service.saveArtist = function (newArtist) {
  //   return $http.post("/artist", newArtist).then(res => {
  //     return res.data;
  //   });
  // };

  return service;
}

angular.module("AdoptrApp").service("FavoritesService", FavoritesService);
