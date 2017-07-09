SearchController.$inject = ['SearchService'];
function SearchController(SearchService){
  var vm = this;
  console.log('controller');
  activate();

  function activate(){
    vm.pet = SearchService.getPet;
  }
}
export default SearchController;
