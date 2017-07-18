UserSessionsController.$inject = ['$auth', '$state', '$rootScope'];

function UserSessionsController($auth, $state, $rootScope){
  var vm = this;
  vm.passwordResetForm = {};
  activate();

  function activate(){
    $rootScope.$on('auth:password-reset-confirm-success', function() {
      $state.go('passwordReset');
    });
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
          // Clear out any previous error messages
          vm.passwordResetSuccessMessage = "";
          vm.passwordResetErrorMessage = "";
          // handle success response
          console.log('success');
          console.log(response);
          vm.passwordResetSuccessMessage = response.data.message;
          console.log(vm.passwordResetSuccessMessage);
        })
        .catch(function(response) {
          // Clear out any previous error messages
          vm.passwordResetSuccessMessage = "";
          vm.passwordResetErrorMessage = "";
          vm.passwordResetErrorMessage = response.data.errors[0];
          console.log(vm.passwordResetErrorMessage);
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
