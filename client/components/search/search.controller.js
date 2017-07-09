SearchController.$inject = ['SearchService', '$auth', '$state'];
function SearchController(SearchService, $auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    console.log(vm.currentUser);
    SearchService.getPet()
    .then(response => {
      vm.pet = response;
    })
    .catch(response => {
      console.log('error getting pet search');
      console.log(response);
    })
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
export default SearchController;
