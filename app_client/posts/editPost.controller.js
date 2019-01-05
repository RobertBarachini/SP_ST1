(function(){
  function editPostCtrl($scope,$routeParams,aggAppPosts,aggAppUsers){
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
      
      vm.editPo = function() {
          
          if(vm.novDescription && vm.novTags){
            var ch=0;
            var regTag = new RegExp("^(#[a-zA-Z0-9]+(\ )?)+$");
            if(!regTag.test(vm.novTags)){
              ch=1;
              vm.tagsRes='true'
            }
            var regOp= new RegExp("^(?=.{1,500}$)");
            if(!regOp.test(vm.novDescription)){
              ch=1;
              vm.desRes='true'
            }
          if(ch==0){
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
          }
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