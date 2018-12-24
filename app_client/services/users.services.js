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
    function postUser(identity, username, name,surname,profilePicture,posts,postReactions,points,dateJoined,dateLastActive){
      return $http.post("/api/users/",{identity:identity, username:username, name:name,surname:surname,profilePicture:profilePicture,posts:posts,postReactions:postReactions,points:points,dateJoined:dateJoined,dateLastActive:dateLastActive})
    }
    return {
      getUsers: getUsers,
      getUserByID: getUserByID,
      updateUser: updateUser,
      postUser:postUser
    }
  }
  aggAppUsers.$inject = ['$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('aggAppUsers', aggAppUsers);
})();