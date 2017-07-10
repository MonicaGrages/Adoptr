PetsController.$inject = ['PetsService', '$auth', '$state', '$stateParams'];
function PetsController(PetsService, $auth, $state, $stateParams){
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
    console.log(vm.pet.favorites);
    console.log(vm.currentUser);
    vm.pet.favorites.forEach(function(favorite) {
      if (favorite.user_id === vm.currentUser.id) {
        vm.isFavorite = true;
        return true;
      } else {
        vm.isFavorite = false;
      }
    })
  }




  //   if (vm.pet.favorites.forEach(function(favorite) {
  //     console.log(favorite.user_id);
  //     console.log(vm.currentUser.id);

  //     })
  //   )
  //     {
  //       console.log('true');
  //       return true;
  //     } else {
  //       console.log('false');
  //       return false;
  //     }
  // }


}
export default PetsController;
