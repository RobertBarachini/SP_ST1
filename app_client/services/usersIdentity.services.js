(function(){
  function aggAppUsersIdentity($http) {
    function getUsersIdentity(){
      return $http.get("/api/userIdentities")
    };
    function getUserIdentityByID(id){
      return $http.get("/api/userIdentities/" + id)
    };
    
    return {
      getUsersIdentity: getUsersIdentity,
      getUserIdentityByID: getUserIdentityByID
    }
  }
  aggAppUsersIdentity.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsersIdentity', aggAppUsersIdentity);
})();