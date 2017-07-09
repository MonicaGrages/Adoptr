const angular = require("angular");

SearchService.$inject = ["$http"];

function SearchService ($http) {
  const service = this;

  service.getPet = function () {
    return $http.get("/pet_search").then(response => {
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

angular.module("AdoptrApp").service("SearchService", SearchService);
