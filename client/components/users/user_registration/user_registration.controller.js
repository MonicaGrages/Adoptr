
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
        console.log('successful registration: ');
        console.log(response.data.status);
        $state.go('petSearch');
      })
      .catch(function(response) {
        // handle error response
        console.log('error with registration: ');
        console.log(response.data.errors.full_messages[0]);
      });
    };


}
export default UserRegistrationController;








