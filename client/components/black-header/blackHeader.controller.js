BlackHeaderController.$inject = ['$auth', '$state'];
function BlackHeaderController($auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
  }

    vm.signOut = function() {
    $auth.signOut()
      .then(function(response) {
        console.log('Successfully logged out. Come back soon!');
        console.log(response.status);
        $state.go('landingPage');
      })
      .catch(function(response) {
        console.log('error signing out');
        console.log(response);
      })
  }
}
export default BlackHeaderController;
