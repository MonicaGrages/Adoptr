PetsController.$inject = ['PetsService', 'FavoritesService', '$auth', '$state', '$stateParams'];
function PetsController(PetsService, FavoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.isFavorite = false;
  activate();

  function activate(){
    let id = $stateParams.id;
    PetsService.getPet(id)
    .then(response => {
      vm.pet = response;
      vm.checkIfFavorite();
    })
    .catch(response => {
      console.log('error getting pet');
      console.log(response);
    })
  }

  vm.checkIfFavorite = function() {
    vm.pet.favorites.forEach(function(favorite) {
      if (favorite.user_id === vm.currentUser.id) {
        vm.favorite = favorite;
        vm.isFavorite = true;
        return true;
      } else {
        vm.isFavorite = false;
      }
    })
  }

  vm.addToFavorites = function () {
    let petId = $stateParams.id;
    let userId = vm.currentUser.id;
    FavoritesService.addFavorite(petId, userId)
      .then(response => {
        vm.favorite = response.data;
        return vm.isFavorite = true;
      })
      .catch(response => {
        console.log(response);
      });
  }


}
export default PetsController;
