SearchController.$inject = ['SearchService'];
function SearchController(SearchService){
  var vm = this;
  activate();

  function activate(){
    SearchService.getPet()
    .then(response => {
      vm.pet = response;
      console.log('vm.pet is: ');
      console.log(vm.pet);
    })
  }
}
export default SearchController;
