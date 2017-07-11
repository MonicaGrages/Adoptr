UserController.$inject = ['UsersService', 'FavoritesService', '$auth', '$state', '$stateParams'];
function UserController(UsersService, FavoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.isEditingPreferences = false;
  activate();

  function activate(){
    let id = $stateParams.id;
    UsersService.getUser(id)
    .then(response => {
      vm.user = response;
    })
    .catch(response => {
      console.log('error getting user');
      console.log(response);
    })
  }

  vm.update = function() {
  }

}
export default UserController;
