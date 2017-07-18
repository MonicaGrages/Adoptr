PasswordResetController.$inject = ['$auth', '$state'];

function PasswordResetController($auth, $state){
  var vm = this;
  vm.passwordResetErrorMessage = "";
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
        vm.passwordResetErrorMessage = "Error resetting password. Please make sure both fields match and are at least 8 characters."
        console.log('error resetting password');
        console.log(response);
        console.log(response.data.errors.full_messages[0]);
       });
  }


}
export default PasswordResetController;








