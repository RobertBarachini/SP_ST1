(function(){
  function aggAppUsersIdentity($http,auth) {
    function getUsersIdentity(){
      return $http.get("/api/userIdentities",
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    };
    function getUserIdentityByID(id){
      return $http.get("/api/userIdentities/" + id,
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    };
    function postUserIdentity(email, password, userType){
      return $http.post("/api/userIdentities/",{email:email, password:password, userType:userType},
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    };
    function putUserIdentity(id,email, password){
      return $http.put("/api/userIdentities/"+id,{email:email, password:password},
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    }
    
    return {
      getUsersIdentity: getUsersIdentity,
      getUserIdentityByID: getUserIdentityByID,
      postUserIdentity:postUserIdentity,
      putUserIdentity:putUserIdentity
    }
  }
  aggAppUsersIdentity.$inject = ['$http','auth'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsersIdentity', aggAppUsersIdentity);
})();