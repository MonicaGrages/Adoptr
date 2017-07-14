PetsController.$inject = ['PetsService', 'FavoritesService', 'PassesService', '$auth', '$stateParams', '$state'];
function PetsController(PetsService, FavoritesService, PassesService, $auth, $stateParams, $state){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.showContact = false;
  activate();

  function activate(){
    let id = $stateParams.id;
    vm.chatEntries = [];
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

  vm.addRealChatEntry = function(lastChatEntry) {
    vm.chatEntries.pop();
    if (vm.pet.pet_type==="Cat") {
    vm.chatEntries.push("meow!");
    } else if (vm.pet.pet_type==="Dog"){
    vm.chatEntries.push("woof!");
    }
    vm.lastChatEntry = "";
  }

  vm.addToChat = function(lastChatEntry) {
    console.log(lastChatEntry);
    vm.chatEntries.push(lastChatEntry);
    console.log(vm.pet.pet_type);
    vm.chatEntries.push("...");
    setTimeout(vm.addRealChatEntry(lastChatEntry),20000);
  }


}
export default PetsController;
