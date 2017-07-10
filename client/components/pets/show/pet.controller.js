FavoritesController.$inject = ['FavoritesService', '$auth', '$state', '$stateParams'];
function FavoritesController(FavoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    let id = $stateParams.id;
    PetsService.getPet(id)
    .then(response => {
      vm.pet = response;
    })
    .catch(response => {
      console.log('error getting pet');
      console.log(response);
    })
  }

}
export default FavoritesController;
