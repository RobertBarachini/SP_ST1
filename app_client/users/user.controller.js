(function(){
  function usersCtrl($rootScope,$routeParams,$location,$route, aggAppPosts,aggAppUsers, auth){
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
      
      if($rootScope.rootUser){
       aggAppUsers.getUserByID($rootScope.rootUser._id).then(
        function success(res){
          vm.userD=res.data
        }
        );
    }
      
      vm.checkBtn = function(posId){
        var ind = vm.userD.postReactions.indexOf(posId);
        if(ind==-1){
          return "btn-circle btn-circle-default";
        } else {
          return "btn-circle btn-circle-success";
        }
      
    }
    
    vm.reactP = function(posId){
      var ind = vm.userD.postReactions.indexOf(posId);
      if(ind==-1){
        //like
        //vm.user=$rootScope.rootUser;
        vm.userD.postReactions.push(posId)
        aggAppPosts.getPostByID(posId).then( //dubi post
              function success(ress){
                vm.post = ress.data;
                vm.post.likes=vm.post.likes + 1;
                aggAppUsers.updateUser(vm.userD._id, vm.userD).then( //update user
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
        //vm.user=$rootScope.rootUser;
        vm.userD.postReactions.splice(ind,1)
        aggAppPosts.getPostByID(posId).then( //dubi post
              function success(ress){
                vm.post = ress.data;
                vm.post.likes=vm.post.likes - 1;
                aggAppUsers.updateUser(vm.userD._id, vm.userD).then( //update user
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
      
    vm.logout = function(){
      $rootScope.rootUser = null;
      auth.logout();
      $location.path("/");
      $route.reload();
    }
      
   
  }
  
  usersCtrl.$inject = ['$rootScope','$routeParams','$location','$route','aggAppPosts','aggAppUsers','auth'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('usersCtrl', usersCtrl);
})();