FavoritesController.$inject = ['FavoritesService', '$auth', '$state', '$stateParams'];
function FavoritesController(FavoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.favorites = [];
  activate();

  function activate(){
    let userId = $stateParams.userId;
    FavoritesService.getFavorites(userId)
    .then(response => {
      vm.favorites = response;
    })
    .catch(response => {
      console.log('error getting favorites');
      console.log(response);
    })
  }

}
export default FavoritesController;
