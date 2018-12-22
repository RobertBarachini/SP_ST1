(function(){
  function aggAppUsers($http) {
    function getUsers(){
      return $http.get("/api/users")
    };
    function getUserByID(id){
      return $http.get("/api/users/" + id)
    };
    
    return {
      getUsers: getUsers,
      getUserByID: getUserByID
    }
  }
  aggAppUsers.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsers', aggAppUsers);
})();