PassesService.$inject = ["$http"];

function PassesService ($http) {
  const service = this;

  service.addPass = function (petId, userId) {
    return $http.post('/passes', {"pass": {"pet_id": petId, "user_id": userId}})
      .then(response => {
        return response;
      });
  }

  return service;
}

angular.module("AdoptrApp").service("PassesService", PassesService);
