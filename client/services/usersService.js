UsersService.$inject = ["$http", "$auth"];

function UsersService ($http, $auth) {
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

  service.incrementPetsViewed = function (userId) {
    console.log(userId)
    console.log('viewed another pet');
    return $http.patch('/users/'+userId+'/preferences')
      .then(response => {
        return response;
      })
  }

  return service;
}

angular.module("AdoptrApp").service("UsersService", UsersService);
