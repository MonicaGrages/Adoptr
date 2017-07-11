FavoritesService.$inject = ["$http"];

function FavoritesService ($http) {
  const service = this;

  service.getFavorites = function (userId) {
    return $http.get("/users/"+userId+"/favorites")
    .then(response => {
      return response.data;
    });
  };

  service.addFavorite = function (petId, userId) {
    return $http.post('/favorites', {"favorite": {"pet_id": petId, "user_id": userId}})
      .then(response => {
        return response;
      });
  }

  service.deleteFavorite = function (favoriteId) {
    return $http.delete('/favorites/'+favoriteId)
      .then(response => {
        return response;
      });
  }

  return service;
}

angular.module("AdoptrApp").service("FavoritesService", FavoritesService);
