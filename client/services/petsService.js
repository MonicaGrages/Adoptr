const angular = require("angular");

PetsService.$inject = ["$http"];

function PetsService ($http) {
  const service = this;

  service.getPet = function (id) {
    return $http.get("/pets/"+id)
    .then(response => {
      return response.data;
    });
  };



  return service;
}

angular.module("AdoptrApp").service("PetsService", PetsService);
