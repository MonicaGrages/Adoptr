UserSessionsController.$inject = ['$auth', '$state'];

function UserSessionsController($auth, $state){
  var vm = this;
  activate();

  function activate(){
    console.log('user sessions controller');
  }

  vm.handleLoginBtnClick = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function(response) {
          // handle success response
          console.log('successful login');
          console.log(response);
          $state.go('petSearch');
        })
        .catch(function(response) {
          // handle error response
          console.log('error logging in: ');
          console.log(response);
        });
    };


}
export default UserSessionsController;
