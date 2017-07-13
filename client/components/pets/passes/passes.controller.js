PassesController.$inject = ['PassesService', '$auth', '$state', '$stateParams'];
function PassesController(PassesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.passes = [];
  activate();

  function activate(){
    let userId = $stateParams.userId;
    PassesService.getPassesByUser(userId)
    .then(response => {
      vm.passes = response.data;
      console.log(vm.passes);
    })
    .catch(response => {
      console.log('error getting passes');
      console.log(response);
    })
  }

}
export default PassesController;
