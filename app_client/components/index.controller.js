(function(){
  function indexCtrl($scope,aggAppPosts){
    var vm = this;
    vm.naslov = "Laka";
    vm.posts = [];
    aggAppPosts.getPosts().then(
      function success(res){
        vm.posts = res.data;
      },
      function error(er){
        console.error(er);
      } 
      )
  }
  
  indexCtrl.$inject = ['$scope','aggAppPosts'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('indexCtrl', indexCtrl);
})();