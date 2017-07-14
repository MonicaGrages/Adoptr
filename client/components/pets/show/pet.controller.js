PetsController.$inject = ['PetsService', 'FavoritesService', 'PassesService', '$auth', '$stateParams', '$state', '$scope'];
function PetsController(PetsService, FavoritesService, PassesService, $auth, $stateParams, $state, $scope){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.showContact = false;
  vm.chatEntries = [];
  activate();

  function activate(){
    let id = $stateParams.id;
    PetsService.getPet(id)
    .then(response => {
      vm.pet = response;
      vm.checkIfFavorite();
      vm.checkIfPassed();
    })
    .catch(response => {
      console.log('error getting pet');
      console.log(response);
    })
  }

  vm.checkIfFavorite = function() {
    vm.pet.favorites.forEach(function(favorite) {
      if (favorite.user_id === vm.currentUser.id) {
        vm.favorite = favorite;
        vm.isFavorite = true;
        return true;
      } else {
        vm.isFavorite = false;
      }
    })
  }

  vm.checkIfPassed = function() {
    vm.pet.passes.forEach(function(pass) {
      if (pass.user_id === vm.currentUser.id) {
        vm.wasPassed = true;
        return true;
      } else {
        vm.wasPassed = false;
      }
    })
  }

  vm.addToFavorites = function () {
    let petId = $stateParams.id;
    let userId = vm.currentUser.id;
    FavoritesService.addFavorite(petId, userId)
      .then(response => {
        vm.favorite = response.data;
        return vm.isFavorite = true;
      })
      .catch(response => {
        console.log(response);
      });
  }

  vm.passOnPet = function () {
    let petId = $stateParams.id;
    let userId = vm.currentUser.id;
    PassesService.addPass(petId, userId)
      .then(response => {
        $state.go('petSearch');
      })
      .catch(response => {
        console.log(response);
      });
  }

  vm.deleteFavorite = function() {
    FavoritesService.deleteFavorite(vm.favorite.id)
      .then(response => {
        console.log(response.data.message);
        vm.isFavorite = false;
      })
      .catch(response => {
        console.log('error deleting favorite');
        console.log(response.data.error);
      })
  }

  vm.addRealChatEntry = function() {
    vm.chatEntries.pop();
    if (vm.pet.pet_type==="Cat") {
    vm.chatEntries.push("meow!");
    } else if (vm.pet.pet_type==="Dog"){
    vm.chatEntries.push("woof!");
    }
    $scope.$apply();
  }

  vm.addToChat = function(lastChatEntry) {
    vm.chatEntries.push(lastChatEntry);
    vm.chatEntries.push("...");
    vm.lastChatEntry = "";
    setTimeout(vm.addRealChatEntry, 4000);
  }


}
export default PetsController;
