(function(){
  function registerCtrl($rootScope,$location, auth){
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
    vm.prvotnaStran = '/';
    
  vm.register = function() {
    var regUsr = new RegExp("^(?=.{4,20}$)[a-žA-Ž0-9-(\)]+$");
    //username = med 4 in 32 znakov, zgoraj nasteti znaki
    var regEm = new RegExp("^(?![.])(?!.*[.]{2})[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+(?<![.])@(?![-])[a-zA-Z0-9-]+(?<![-])\.(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$");
    //email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
    var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
    //geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka
    var regFN = new RegExp("^(?=.{1,50}$)(?![\ ])[a-žA-Ž-(\ )]+(?<![\ ])$");
    //full name = crke, presledki, 
    var checkEr=0;
    if(!regUsr.test(vm.prijavniPodatki.username)){
        vm.usernameRes = 'true'
        checkEr=1;
      }
      if(!regEm.test(vm.prijavniPodatki.email)){
        vm.emailRes = 'true'
        checkEr=1;
      }
      if(!regPass.test(vm.prijavniPodatki.password)){
        vm.passRes = 'true'
        checkEr=1;
      } else {
        if(vm.prijavniPodatki.password != vm.prijavniPodatki.password2){
          vm.pass2Res = 'true'
          checkEr=1;
        }
      }
      if(!regFN.test(vm.prijavniPodatki.name)){
        vm.nameRes = 'true'
        checkEr=1;
      }
      if(!regFN.test(vm.prijavniPodatki.surname)){
        vm.surnameRes = 'true'
        checkEr=1;
      }
      if(checkEr==0){
      auth.registration(vm.prijavniPodatki).then(
          function(success) {
            $location.search('stran', null);
            $location.path(vm.prvotnaStran);
          },
          function(napaka) {
            vm.napakaNaObrazcu = napaka.data.sporocilo;
          }
        );
      }
  }
  
      
};
  
  registerCtrl.$inject = ['$rootScope','$location', 'auth'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('registerCtrl', registerCtrl);
})();