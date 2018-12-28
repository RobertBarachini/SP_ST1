(function(){
  function editProfileCtrl($rootScope,$routeParams,$location,$route, aggAppPosts,aggAppUsers,aggAppUsersIdentity){
    var vm = this;
    vm.userID = $routeParams.id;
    
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
    
    
    if(!vm.url){
      vm.noviUser.profilePicture = vm.user.profilePicture;
    }
    
    if(vm.novUsername && vm.novName && vm.novSurname && vm.noviIdentity.email && vm.noviIdentity.password){
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