(function(){
  function loginCtrl($rootScope,$location,aggAppUsersIdentity,aggAppUsers, auth){
    var vm = this;
    
    vm.prijavniPodatki = {
      email: "",
      password: ""
    };
    
    var loginan = false;
    vm.login = function(){ //ko stisne login lahko primerja ce ustreza keremu. TODO!!!! naredit ustrezn login
      var regEm = new RegExp("^(?![.])(?!.*[.]{2})[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+(?<![.])@(?![-])[a-zA-Z0-9-]+(?<![-])\.(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$");
     var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
      if(regPass.test(vm.prijavniPodatki.password) && regEm.test(vm.prijavniPodatki.email)){
        
        auth.login(vm.prijavniPodatki).then(
          //po uspesni prijavi, klici servis za pridobitev uporabnika, ki se je identificiral
            function(success) {
              var userIdAndIdentity = auth.currentUser();
              if(!userIdAndIdentity){
                console.log('NI PRIJAVLJENEGA UPORABNIKA!')
              }else {
                aggAppUsers.getUserByID(userIdAndIdentity._id).then(
                  function success(res) {
                    $rootScope.rootUser = res.data;
                    loginan = true;
                    console.log('Nastavil uporabnika v root scope---------------');
                    console.log(res.data)
                    $location.path("/");
                  },
                  function error(err) {
                    console.error(err);
                  }
                );
              }
            },
            function(napaka) {
              vm.napakaNaObrazcu = napaka.data.sporocilo;
            }
          );
      }
      if(!loginan){
        vm.response='failure'
        //$location.path("/login");
      } 
    };
    
  }
  
  loginCtrl.$inject = ['$rootScope','$location','aggAppUsersIdentity','aggAppUsers', 'auth'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('loginCtrl', loginCtrl);
})();