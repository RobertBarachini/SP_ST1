(function(){
  function loginCtrl($rootScope,$location,aggAppUsersIdentity,aggAppUsers){
    var vm = this;
    
    vm.prijavniPodatki = {
      email: "",
      password: ""
    };
    // pridobi vse uporabnika, da potem ko stisne login lahko primerja ce ustreza keremu. TODO!!!! naredit ustrezn login
    aggAppUsersIdentity.getUsersIdentity().then(
      function success(res) {
        vm.usersIdentity = res.data;
        console.log(vm.usersIdentity)
      },
      function error(err) {
        console.error(err);
      }
    );
    var loginan = false;
    vm.login = function(){  //ko stisne login lahko primerja ce ustreza keremu. TODO!!!! naredit ustrezn login
      for(var up in vm.usersIdentity) {
        if(vm.prijavniPodatki.email === vm.usersIdentity[up].email && vm.prijavniPodatki.password ===  vm.usersIdentity[up].password) {
          loginan = true;
          aggAppUsers.getUsers().then(
            function success(res) {
              for(var uporabnik in res.data){
                if(res.data[uporabnik].identity === vm.usersIdentity[up]._id) {
                  $rootScope.rootUser = res.data[uporabnik];
                  $location.path("/");
                }
              }
            },
            function error(err) {
              console.error(err);
            }
          );
          break;
        }
      }
      if(!loginan){
        vm.response='failure'
        //$location.path("/login");
      } 
    };
    
  }
  
  loginCtrl.$inject = ['$rootScope','$location','aggAppUsersIdentity','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('loginCtrl', loginCtrl);
})();