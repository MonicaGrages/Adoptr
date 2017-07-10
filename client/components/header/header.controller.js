HeaderController.$inject = ['SearchService', '$auth'];
function HeaderController(SearchService, $auth){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
  }

    vm.signOut = function() {
    $auth.signOut()
      .then(function(response) {
        console.log('successful sign out');
        console.log(response.status);
        $state.go('home');
      })
      .catch(function(response) {
        console.log('error signing out');
        console.log(response);
      })
  }
}
export default HeaderController;
