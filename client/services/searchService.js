const angular = require("angular");

SearchService.$inject = ["$http"];

function SearchService ($http) {
  const service = this;

  service.getPet = function () {
    return $http.get("/pet_search").then(response => {
      return response.data;
    });
  };

  return service;
}

angular.module("AdoptrApp").service("SearchService", SearchService);
