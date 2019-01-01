(function(){
  function postsCtrl($scope,$routeParams,aggAppPosts,aggAppUsers){
    var vm = this;
    vm.postID = $routeParams.id;
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
      
    vm.dodajComment = function(idU) {
      var novKomentar = {"owner":idU._id, "content":vm.comment}
      var regOp= new RegExp("(?=.{1,500}$)");
      if(novKomentar.content && regOp.test(novKomentar.content)){
        vm.post.comments.push(novKomentar)
      
        aggAppPosts.addComm(vm.postID,vm.post.title,vm.post.owner,vm.post.body,vm.post.description,vm.post.hashtags,vm.post.likes,vm.post.dislikes,vm.post.comments).then(
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
    
    vm.izbrisiPost = function(rUserId){
      console.log("TU ");
      console.log(vm);
      console.log("vmmm ");
      console.log(vm.post.owner);
      
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
  
  postsCtrl.$inject = ['$scope','$routeParams','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('postsCtrl', postsCtrl);
})();