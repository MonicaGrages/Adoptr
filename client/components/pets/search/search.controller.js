SearchController.$inject = ['SearchService', '$auth', '$state'];
function SearchController(SearchService, $auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    console.log("in search controller")
    SearchService.getPet()
    .then(response => {
      vm.pet = response;
    })
    .catch(response => {
      console.log('error getting pet search');
      console.log(response);
    })
  }

}
export default SearchController;
