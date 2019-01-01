(function(){
  function editPostCtrl($scope,$routeParams,aggAppPosts,aggAppUsers){
    var vm = this;
    console.log("OVDEEE")
    console.log(vm)
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
      
      vm.editPo = function() {
          console.log("tuu")
          console.log(vm.novDescription+" "+vm.novTags)
          
          if(vm.novDescription && vm.novTags){
            aggAppPosts.editPost(vm.post._id,vm.post.title,vm.post.owner,vm.post.body,vm.novDescription,vm.novTags,vm.post.likes,vm.post.dislikes,vm.post.comments).then(
                function success(res) {
                vm.response = 'success'
                console.log(res);
              },
              function error(err) {
                console.error(err);
                vm.response = 'errorAdd'
              }  
            );
          } else {
            vm.response = 'brezp'
          }
          
          
          
      }

  }
  
  
  
  editPostCtrl.$inject = ['$scope','$routeParams','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('editPostCtrl', editPostCtrl);
})();