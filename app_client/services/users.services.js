(function(){
  function aggAppUsers($http,auth) {
    function getUsers(){
      return $http.get("/api/users",
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    };
    function getUserByID(id){
      return $http.get("/api/users/" + id,
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    };
    function updateUser(id,uporabnik){
      return $http.put("/api/users/" + id, uporabnik,
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    };
    function postUser(identity, username, name,surname,profilePicture,posts,postReactions,points,dateJoined,dateLastActive){
      return $http.post("/api/users/",{identity:identity, username:username, name:name,surname:surname,profilePicture:profilePicture,posts:posts,postReactions:postReactions,points:points,dateJoined:dateJoined,dateLastActive:dateLastActive},
      {
        headers: {
          Authorization: 'Bearer ' + auth.getToken()
        }
      })
    }
    return {
      getUsers: getUsers,
      getUserByID: getUserByID,
      updateUser: updateUser,
      postUser:postUser
    }
  }
  aggAppUsers.$inject = ['$http','auth'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsers', aggAppUsers);
})();