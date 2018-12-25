(function(){
  function indexCtrl($scope,$uibModal, aggAppPosts){
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
      
    vm.modalOkno= function(){
     $uibModal.open({
        templateUrl:'/modalnaOkna/addPost/addPost.controller.html',
        controller: 'addPostCtrl',
        controllerAs: 'vm'
      });
    };
    
  }
  
  indexCtrl.$inject = ['$scope','$uibModal','aggAppPosts'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('indexCtrl', indexCtrl);
})();