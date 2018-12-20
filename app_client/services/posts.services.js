(function(){
  function aggAppPosts($http) {
    function getPosts(){
      return $http.get("/api/posts")
    };
    function getPostByID(id){
      return $http.get("/api/posts/" + id)
    };
    
    return {
      getPosts: getPosts,
      getPostByID: getPostByID
    }
  }
  aggAppPosts.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppPosts', aggAppPosts);
})();