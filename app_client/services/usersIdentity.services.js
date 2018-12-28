(function(){
  function aggAppUsersIdentity($http) {
    function getUsersIdentity(){
      return $http.get("/api/userIdentities")
    };
    function getUserIdentityByID(id){
      return $http.get("/api/userIdentities/" + id)
    };
    function postUserIdentity(email, password, userType){
      return $http.post("/api/userIdentities/",{email:email, password:password, userType:userType})
    };
    function putUserIdentity(id,email, password){
      return $http.put("/api/userIdentities/"+id,{email:email, password:password})
    }
    
    return {
      getUsersIdentity: getUsersIdentity,
      getUserIdentityByID: getUserIdentityByID,
      postUserIdentity:postUserIdentity,
      putUserIdentity:putUserIdentity
    }
  }
  aggAppUsersIdentity.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsersIdentity', aggAppUsersIdentity);
})();