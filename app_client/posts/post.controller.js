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
      
   
  }
  
  postsCtrl.$inject = ['$scope','$routeParams','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('postsCtrl', postsCtrl);
})();