LandingPageController.$inject = ['$auth', '$state'];
function LandingPageController($auth, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate(){
    console.log('landing page controller');
  }


}
export default LandingPageController;
