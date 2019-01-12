(function(){
  function postsCtrl($scope,$routeParams,aggAppPosts,aggAppUsers,aggAppUsersIdentity, $rootScope){
    var vm = this;
    vm.postID = $routeParams.id;
    vm.adUs = false;
    aggAppPosts.getPostByID(vm.postID).then(
      function success(res){
        vm.post = res.data;
        aggAppUsers.getUsers().then(
          function success(ress) {
            vm.users = ress.data;
            console.log(ress)
          },
          function error(err) {
            console.error(err);
          }
          );
        console.log(res)
      },
      function error(er){
        console.error(er);
      } 
      );
      
        aggAppUsersIdentity.getUserIdentityByID($rootScope.rootUser.identity).then(
          function success(res) {
            vm.adUs = true;
          },
          function error(err) {
            console.error(err);
          }
        );
      
      
      
    vm.dodajComment = function(idU) {
      vm.desRes=false;
      var novKomentar = {"owner":idU._id, "content":vm.comment}
      //var regOp= new RegExp("^(?=.{1,500}$)");
      var regOp= new RegExp("^(?=.{1,500}$)[a-žA-Ž0-9#-.!?(\ )]+$");
      if(novKomentar.content && regOp.test(novKomentar.content)){
        vm.post.comments.push(novKomentar)
      
        aggAppPosts.addComm(vm.postID,vm.post.title,vm.post.owner,vm.post.body,vm.post.description,vm.post.hashtags,vm.post.likes,vm.post.dislikes,vm.post.comments).then(
          function success(res) {
          vm.desRes = 'success'
          vm.comment=''
          console.log(res);
        },
        function error(err) {
          console.error(err);
          vm.desRes = 'err'
        }  
        );
      } else {
        vm.desRes='true'
      }
      
      
    }
    
    vm.izbrisiPost = function(rUserId){
      
      aggAppUsers.getUserByID(vm.post.owner).then(
      function success(res){
        vm.user = res.data;
          var ind = vm.user.posts.indexOf(vm.postID)
          if(ind!=-1){
            vm.user.posts.splice(ind,1)
            aggAppPosts.deletePost(vm.post._id).then(
              function success(res) {
                aggAppUsers.updateUser(vm.user._id, vm.user).then(
                  function success(res) {
                    vm.response = 'success'
                  },
                  function error(err) {
                    console.error(err);
                    vm.response = 'errorUser'
                  }  
                  
                  );
                
                
              },
              function error(err) {
                console.error(err);
                vm.response = 'error'
              }  
            );
          }
      },
      function error(er){
        console.error(er);
        vm.response = 'errorUser'
      } 
      );
      
    }
   
  }
  
  postsCtrl.$inject = ['$scope','$routeParams','aggAppPosts','aggAppUsers','aggAppUsersIdentity', '$rootScope'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('postsCtrl', postsCtrl);
})();