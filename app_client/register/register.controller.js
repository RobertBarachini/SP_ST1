(function(){
  function registerCtrl($rootScope,$location,aggAppUsersIdentity,aggAppUsers){
    var vm = this;
    
    vm.prijavniPodatki = {
      name:"",
      surname:"",
      username:"",
      email: "",
      password:"",
      password2: "",
      profilePic:""
    }
  vm.register = function() {
    aggAppUsersIdentity.postUserIdentity(vm.prijavniPodatki.email, vm.prijavniPodatki.password, "user").then(
      function success(rezultat) {
        console.log("UserIdentititeta POST")
        console.log(rezultat.data)
        aggAppUsers.postUser(rezultat.data._id, vm.prijavniPodatki.username, vm.prijavniPodatki.name,vm.prijavniPodatki.surname,vm.prijavniPodatki.profilePic,[],[],0,null,null).then(
          function success(rez) {
            vm.response="success"
            console.log(rez)
          },
          function error(err) {
            vm.response="errorUser"
            console.log(err);
          }
        )
      },
      function error(error) {
        vm.response = "errorUserIdentity"
        console.log(error);
      }
    )
  }
  
      
};
  
  registerCtrl.$inject = ['$rootScope','$location','aggAppUsersIdentity','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('registerCtrl', registerCtrl);
})();