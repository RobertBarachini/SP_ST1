(function(){
  function aggAppUsers($http) {
    function getUsers(){
      return $http.get("/api/users")
    };
    function getUserByID(id){
      return $http.get("/api/users/" + id)
    };
    function updateUser(id,uporabnik){
      return $http.put("/api/users/" + id, uporabnik)
    };
    
    return {
      getUsers: getUsers,
      getUserByID: getUserByID,
      updateUser: updateUser
    }
  }
  aggAppUsers.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsers', aggAppUsers);
})();