SearchController.$inject = ['SearchService', '$auth'];
function SearchController(SearchService, $auth){
  var vm = this;
  vm.currentUserId = $auth.user.id;
  activate();

  function activate(){
    SearchService.getPet()
    .then(response => {
      vm.pet = response;
    })
  }
}
export default SearchController;
