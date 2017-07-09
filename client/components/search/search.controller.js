SearchController.$inject = ['SearchService'];
function SearchController(SearchService){
  var vm = this;
  activate();

  function activate(){
    SearchService.getPet()
    .then(response => {
      vm.pet = response;
    })
  }
}
export default SearchController;
