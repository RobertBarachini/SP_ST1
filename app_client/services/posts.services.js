(function(){
  function aggAppPosts($http) {
    function getPosts(){
      return $http.get("/api/posts")
    };
    function getPostByID(id){
      return $http.get("/api/posts/" + id)
    };
    function addPost(title,owner,body,description,hashtags,likes,dislikes,comments){
      return $http.post("/api/posts",{title:title,owner:owner,body:body,description:description,hashtags:hashtags,likes:likes,dislikes:dislikes,comments:comments});
    };
    
    return {
      getPosts: getPosts,
      getPostByID: getPostByID,
      addPost:addPost
    }
  }
  aggAppPosts.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppPosts', aggAppPosts);
})();