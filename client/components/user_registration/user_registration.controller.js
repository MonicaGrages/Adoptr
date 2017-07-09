
UserRegistrationController.$inject = ['$auth'];

function UserRegistrationController($auth){
  var vm = this;
  activate();

  function activate(){
    console.log('user registration controller');
  }

  vm.handleRegBtnClick = function(registrationForm) {
    $auth.submitRegistration(registrationForm)
      .then(function(response) {
        // handle success response
        console.log('successful registration: ');
        console.log(response);
      })
      .catch(function(response) {
        // handle error response
        console.log('error with registration: ');
        console.log(response);
      });
    };


}
export default UserRegistrationController;








