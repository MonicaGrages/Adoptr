UserSessionsController.$inject = ['$auth', '$state'];

function UserSessionsController($auth, $state){
  var vm = this;
  vm.passwordResetForm = {};
  activate();

  function activate(){
  }

  vm.handleLoginBtnClick = function(loginForm) {
    $auth.submitLogin(loginForm)
      .then(function(response) {
        // handle success response
        vm.current_user_id = response.id;
        console.log('successful login');
        $state.go('petSearch');
      })
      .catch(function(response) {
        // handle error response
        console.log('error logging in: ');
        console.log(response);
        vm.loginErrorMessage = "Email/Password combination not found. Try again.";
      });
  };

  vm.passwordReset = function() {
    console.log('reset');
    $auth.requestPasswordReset(vm.passwordResetForm)
        .then(function(response) {
          // handle success response
          console.log('success');
          console.log(response);
          // vm.passwordResetResponse = "Password reset email sent to vm."
        })
        .catch(function(response) {
          vm.passwordResetResponseMessage = response.data.errors[0];
          // handle error response
          console.log('error');
          console.log(response);
        });
    // $auth.requestPasswordReset(passwordResetForm)
    //     .then(function(response) {
    //       // handle success response
    //       console.log(response);
    //     })
    //     .catch(function(response) {
    //       // handle error response
    //       console.log(response);
    //     });
  }


}
export default UserSessionsController;
