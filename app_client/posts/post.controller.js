(function(){
  function postsCtrl($scope,$routeParams,aggAppPosts){
    var vm = this;
    vm.postID = $routeParams.id;
    aggAppPosts.getPostByID(vm.postID).then(
      function success(res){
        vm.post = res.data;
        console.log(res)
      },
      function error(er){
        console.error(er);
      } 
      )
  }
  
  postsCtrl.$inject = ['$scope','$routeParams','aggAppPosts'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('postsCtrl', postsCtrl);
})();