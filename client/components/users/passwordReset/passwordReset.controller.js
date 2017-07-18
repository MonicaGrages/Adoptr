PasswordResetController.$inject = ['$auth', '$state'];

function PasswordResetController($auth, $state){
  var vm = this;
  activate();

  function activate(){
  }


  vm.updatePassword = function(changePasswordForm) {
    $auth.updatePassword(changePasswordForm)
       .then(function(response) {
        // handle success response
        console.log('successful password reset');
        $state.go('landingPage');
       })
       .catch(function(response) {
        // handle error response
        console.log('error resetting password');
        console.log(response);
       });
  }


}
export default PasswordResetController;








