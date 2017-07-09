SearchController.$inject = ['SearchService'];
function SearchController(SearchService){
  var vm = this;
  activate();

  function activate(){
    vm.pet = SearchService.getPet;
  }
}
export default SearchController;
