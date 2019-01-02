(function(){
  function indexCtrl($scope,$rootScope,$uibModal, aggAppPosts, aggAppUsers){
    var vm = this;
    vm.naslov = "Laka";
    vm.posts = [];
    aggAppPosts.getPosts().then(
      function success(res){
        vm.posts = res.data;
        console.log(res)
      },
      function error(er){
        console.error(er);
      } 
      );
      aggAppUsers.getUsers().then(
          function success(ress) {
            vm.users = ress.data;
            console.log(ress)
          },
          function error(err) {
            console.error(err);
          }
          );
      
    vm.modalOkno= function(){
     $uibModal.open({
        templateUrl:'/modalnaOkna/addPost/addPost.controller.html',
        controller: 'addPostCtrl',
        controllerAs: 'vm'
      });
    };
    
    vm.checkBtn = function(posId){
      console.log("bbbb")
        var ind = $rootScope.rootUser.postReactions.indexOf(posId);
        if(ind==-1){
          return "btn-circle btn-circle-default";
        } else {
          return "btn-circle btn-circle-success";
        }
      
    }
    
    vm.reactP = function(posId){
      var ind = $rootScope.rootUser.postReactions.indexOf(posId);
      if(ind==-1){
        //like
        vm.user=$rootScope.rootUser;
        vm.user.postReactions.push(posId)
        aggAppPosts.getPostByID(posId).then( //dubi post
              function success(ress){
                vm.post = ress.data;
                vm.post.likes=vm.post.likes + 1;
                aggAppUsers.updateUser(vm.user._id, vm.user).then( //update user
                  function success(resss){
                    aggAppPosts.editPost(vm.post._id, vm.post.title,vm.post.owner,vm.post.body,vm.post.description,vm.post.hashtags,vm.post.likes,vm.post.dislikes,vm.post.comments).then( //update post
                      function success(resss){
                        vm.response = 'success'
                      },
                      function error(errrr){
                        console.error(errrr);
                        vm.response = 'errorPost'
                      } 
                      );
                  },
                  function error(errr){
                    console.error(errr);
                    vm.response = 'errorUser'
                  } 
                  );
              },
              function error(err){
                console.error(err);
                vm.response = 'errorPost'
              } 
            );
      } else {
        vm.user=$rootScope.rootUser;
        vm.user.postReactions.splice(ind,1)
        aggAppPosts.getPostByID(posId).then( //dubi post
              function success(ress){
                vm.post = ress.data;
                vm.post.likes=vm.post.likes - 1;
                aggAppUsers.updateUser(vm.user._id, vm.user).then( //update user
                  function success(resss){
                    aggAppPosts.editPost(vm.post._id, vm.post.title,vm.post.owner,vm.post.body,vm.post.description,vm.post.hashtags,vm.post.likes,vm.post.dislikes,vm.post.comments).then( //update post
                      function success(resss){
                        vm.response = 'success'
                      },
                      function error(errrr){
                        console.error(errrr);
                        vm.response = 'errorPost'
                      } 
                      );
                  },
                  function error(errr){
                    console.error(errr);
                    vm.response = 'errorUser'
                  } 
                  );
              },
              function error(err){
                console.error(err);
                vm.response = 'errorPost'
              } 
            );
      }
    }
    
  }
  
  indexCtrl.$inject = ['$scope','$rootScope','$uibModal','aggAppPosts', 'aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('indexCtrl', indexCtrl);
}
)();