UsersService.$inject = ["$http"];

function UsersService ($http) {
  const service = this;

  service.getUser = function (id) {
    return $http.get("/users/"+id)
    .then(response => {
      return response.data;
    });
  };

  service.updatePreferences = function (userId, preferenceEdits) {
    return $http.put('/users/'+userId+'/preferences', preferenceEdits)
      .then(response => {
        return response;
      })
  }

  return service;
}

angular.module("AdoptrApp").service("UsersService", UsersService);
