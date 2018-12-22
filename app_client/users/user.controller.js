(function(){
  function usersCtrl($rootScope,$routeParams,$location,$route, aggAppPosts,aggAppUsers){
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
      
    vm.logout = function(){
      $rootScope.rootUser = null;
      $location.path("/");
      $route.reload();
    }
      
   
  }
  
  usersCtrl.$inject = ['$rootScope','$routeParams','$location','$route','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('usersCtrl', usersCtrl);
})();