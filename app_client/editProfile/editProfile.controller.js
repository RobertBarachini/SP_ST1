(function(){
  function editProfileCtrl($rootScope,$routeParams,$location,$route, aggAppPosts,aggAppUsers,aggAppUsersIdentity){
    var vm = this;
    vm.userID = $routeParams.id;
    console.log($rootScope.rootUser);
    aggAppUsers.getUserByID(vm.userID).then(
      function success(res){
        vm.user = res.data;
        var userPostsID = res.data.posts;
        vm.userPosts = new Array();
        for (var i=0; i<userPostsID.length; i++) {
          aggAppPosts.getPostByID(userPostsID[i]).then(
            function success(r) {
              vm.userPosts.push(r.data);
            },
            function error(e) {
              console.log(e);
            }
          )
        }
      },
      function error(er){
        console.error(er);
      } 
      );
      
            
    vm.editP = function(idU) {
      
      var regUsr = new RegExp("^(?=.{4,20}$)[a-žA-Ž0-9-(\ )]+$");
      //username = med 4 in 32 znakov, zgoraj nasteti znaki
      var regEm = new RegExp("^(?![.])(?!.*[.]{2})[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+(?<![.])@(?![-])[a-zA-Z0-9-]+(?<![-])\.(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$");
      //email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
      var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
      //geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka
      var regFN = new RegExp("^(?=.{1,50}$)(?![\ ])[a-žA-Ž-(\ )]+(?<![\ ])$");
      //full name = crke, presledki, -
      vm.usernameRes = 'false'
      vm.emailRes = 'false'
      vm.passRes = 'false'
      vm.pass2Res = 'false'
      vm.nameRes = 'false'
      vm.surnameRes = 'false'
      vm.response = 'false'
      
    vm.noviUser = {
      posts: vm.user.posts,
      postReactions: vm.user.postReactions,
      points: vm.user.points,
      _id: vm.user._id,
      identity: vm.user.identity,
      username: vm.novUsername, //sssss
      name: vm.novName,
      surname: vm.novSurname,
      profilePicture: vm.url,
      dateLastActive: vm.user.dateLastActive
    };
    
    vm.noviIdentity = {
      _id: vm.noviUser.identity,
      email: vm.novEmail,
      password: vm.novPassword
    }
      
      aggAppUsersIdentity.getUsersIdentity().then(
      function success(res) {
        console.log("break")
        console.log(res.data)
      },
      function error(err) {
        console.error(err);
      }
    );
    var regWbL= new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
    var checkEr=0;
    if(vm.novUsername && vm.novName && vm.novSurname && vm.noviIdentity.email && vm.noviIdentity.password){
      if(!vm.url){
        vm.noviUser.profilePicture = vm.user.profilePicture;
      } else if(regWbL.test(vm.url)){
        checkEr=1;
      }
      if(!regUsr.test(vm.novUsername)){
        vm.usernameRes = 'true'
        checkEr=1;
      }
      if(!regEm.test(vm.noviIdentity.email)){
        vm.emailRes = 'true'
        checkEr=1;
      }
      if(!regPass.test(vm.noviIdentity.password)){
        vm.passRes = 'true'
        checkEr=1;
      } else {
        if(vm.noviIdentity.password != vm.novPassword2){
          vm.pass2Res = 'true'
          checkEr=1;
        }
      }
      if(!regFN.test(vm.novName)){
        vm.nameRes = 'true'
        checkEr=1;
      }
      if(!regFN.test(vm.novSurname)){
        vm.surnameRes = 'true'
        checkEr=1;
      }
        if(checkEr==0){
        aggAppUsers.updateUser(vm.noviUser._id, vm.noviUser).then(
        function success(res) {
          aggAppUsersIdentity.putUserIdentity(vm.noviIdentity._id, vm.noviIdentity.email, vm.noviIdentity.password).then(
            function success(ress){
              
            },
          function error(er) {
            console.error(er);
            vm.response = 'errorAdd'
          }  
            );
            vm.response = 'success'
            console.log(res);
          },
          function error(err) {
            console.error(err);
            vm.response = 'errorAdd'
          }  
        );
      }
    } else {
      vm.response= 'brezp'
    }
      
    
      
    }
   
  }
  
  editProfileCtrl.$inject = ['$rootScope','$routeParams','$location','$route','aggAppPosts','aggAppUsers','aggAppUsersIdentity'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('editProfileCtrl', editProfileCtrl);
})();