SearchController.$inject = ['SearchService', 'FavoritesService', 'PassesService', 'UsersService', '$auth', '$state'];
function SearchController(SearchService, FavoritesService, PassesService, UsersService, $auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    UsersService.incrementPetsViewed(vm.currentUser.id);
    SearchService.getPet(vm.currentUser.id)
    .then(response => {
      vm.pet = response;
    })
    .catch(response => {
      console.log('error getting pet search');
      console.log(response);
    })
  }

  vm.addFavorite = function() {
    let petId = vm.pet.id;
    let userId = vm.currentUser.id;
    FavoritesService.addFavorite(petId, userId)
      .then(response => {
        $state.go('petShow({id: $ctrl.pet.id})');
      })
      .catch(response => {
        console.log(response);
      });
  }

  vm.passOnPet = function() {
    let petId = vm.pet.id;
    let userId = vm.currentUser.id;
    PassesService.addPass(petId, userId)
      .then(response => {
        activate();
      })
      .catch(response => {
        console.log(response);
      });
  }

}
export default SearchController;
