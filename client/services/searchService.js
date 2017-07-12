SearchService.$inject = ["$http", "$auth", "UsersService"];

function SearchService ($http, $auth, UsersService) {
  const service = this;
  let currentUser = $auth.user;


  service.getPet = function (userId) {
    console.log('get pet');
    return $http.get("/pet_search/"+userId).then(response => {
      return response.data;
    });
  };

  return service;
}

angular.module("AdoptrApp").service("SearchService", SearchService);
