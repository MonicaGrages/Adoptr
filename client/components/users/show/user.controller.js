UserController.$inject = ['UsersService', 'FavoritesService', '$auth', '$state', '$stateParams'];
function UserController(UsersService, FavoritesService, $auth, $state, $stateParams){
  var vm = this;
  let id = $stateParams.id
  vm.currentUser = $auth.user;
  vm.isEditingPreferences = false;
  activate();

  function activate(){
    ;
    UsersService.getUser(id)
    .then(response => {
      vm.user = response;
    })
    .catch(response => {
      console.log('error getting user');
      console.log(response);
    })
  }

  vm.updatePreferences = function() {
    UsersService.updatePreferences(vm.user.id, vm.user.preference)
      .then(response => {
        console.log('successfully updated preferences');
      })
      .catch(response => {
        console.log('error updating preferences');
      })
  }

}
export default UserController;
