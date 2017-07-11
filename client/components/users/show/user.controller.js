UserController.$inject = ['UsersService', 'FavoritesService', '$auth', '$state', '$stateParams'];
function UserController(UsersService, FavoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    let id = $stateParams.id;
    UsersService.getUser(id)
    .then(response => {
      vm.user = response;
        console.log(vm.user.preference);
    })
    .catch(response => {
      console.log('error getting user');
      console.log(response);
    })
  }

}
export default UserController;
