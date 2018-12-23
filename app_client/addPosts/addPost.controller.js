(function(){
  function addPostsCtrl($rootScope,$routeParams,aggAppPosts,aggAppUsers){
    var vm = this;
    vm.userID = $routeParams.id;
    vm.typeID = $routeParams.idd;
   
  }
  
  addPostsCtrl.$inject = ['$rootScope','$routeParams','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('addPostsCtrl', addPostsCtrl);
})();