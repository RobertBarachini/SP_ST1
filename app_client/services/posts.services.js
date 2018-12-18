(function(){
  function aggAppPosts($http) {
    function getPosts(){
      return $http.get("/api/posts")
    };
    return {
      getPosts: getPosts
    }
  }
  aggAppPosts.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppPosts', aggAppPosts);
})();