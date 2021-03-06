
UserRegistrationController.$inject = ['$auth', '$state'];

function UserRegistrationController($auth, $state){
  var vm = this;
  activate();

  function activate(){
  }

  vm.handleRegBtnClick = function(registrationForm) {
    $auth.submitRegistration(registrationForm)
      .then(function(response) {
        // handle success response
        console.log(response.data.status);
        $state.go('enterPreferences');
      })
      .catch(function(response) {
        // handle error response
        console.log('error with registration: ');
        console.log(response);
        if(response.data.errors.full_messages) {
          vm.registrationErrorMessage = response.data.errors.full_messages[0];
        }
      });
    };


}
export default UserRegistrationController;








