PreferenceController.$inject = ['UsersService', '$auth', '$state'];
function PreferenceController(UsersService, $auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    UsersService.getUser(vm.currentUser.id)
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
        $state.go('sign_in');
      })
      .catch(response => {
        console.log('error updating preferences');
      })
  }

}
export default PreferenceController;
