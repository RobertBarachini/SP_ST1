(function(){
  function editProfileCtrl($rootScope,$routeParams,$location,$route, aggAppPosts,aggAppUsers,aggAppUsersIdentity){
    var vm = this;
    vm.userID = $routeParams.id;
    
    console.log("AAAAAAAA")
    console.log(vm)
    
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
      profilePicture: vm.user.profilePicture,
      dateLastActive: vm.user.dateLastActive
    };
    
    vm.noviIdentity = {
      _id: vm.user._id,
      email: vm.novEmail,
      password: vm.novPassword
    }
    
      console.log("tuu")
      console.log(vm.novName+" "+vm.novUsername+" "+vm.novWebsite+" "+vm.novBio+" "+vm.novEmail+" "+vm.novTZ+" "+vm.novPassword+" "+vm.novPassword2+" ")
      console.log("zvei")
      console.log(vm)
    console.log("BBBBBBBB")
    console.log(vm)
      
      //userIdentities
      //email password _id
      
      //user - vse drugo
      
      aggAppUsersIdentity.getUsersIdentity().then(
      function success(res) {
        console.log("break")
        console.log(res.data)
      },
      function error(err) {
        console.error(err);
      }
    );
    
    aggAppUsers.updateUser(vm.noviUser._id, vm.noviUser).then(
      function success(res) {
          vm.response = 'success'
          console.log(res);
        },
        function error(err) {
          console.error(err);
          vm.response = 'errorAdd'
        }  
      );
      
    }
   
  }
  
  editProfileCtrl.$inject = ['$rootScope','$routeParams','$location','$route','aggAppPosts','aggAppUsers','aggAppUsersIdentity'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('editProfileCtrl', editProfileCtrl);
})();