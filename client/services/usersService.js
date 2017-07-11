const angular = require("angular");

UsersService.$inject = ["$http"];

function UsersService ($http) {
  const service = this;

  service.getUser = function (id) {
    return $http.get("/users/"+id)
    .then(response => {
      return response.data;
    });
  };

  return service;
}

angular.module("AdoptrApp").service("UsersService", UsersService);
