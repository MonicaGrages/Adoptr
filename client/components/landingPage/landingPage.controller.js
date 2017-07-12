LandingPageController.$inject = ['$auth', '$state'];
function LandingPageController($auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
  }


}
export default LandingPageController;
