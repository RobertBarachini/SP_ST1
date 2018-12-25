(function(){
  function addPostsCtrl($rootScope,$routeParams,aggAppPosts,aggAppUsers){
    var vm = this;
    vm.userID = $routeParams.id;
    vm.typeID = $routeParams.idd;
   
    vm.title = "";
    vm.url = "";
    vm.description = "";
    vm.tags = "";
    
    
    vm.dodajPost = function() {
      //title,owner,body,description,hashtags,likes,dislikes,comments
      var body;
      if(vm.typeID == 3) {
        body = {
        bodyType: 'text',
        content: ''
        }
      } else if(vm.typeID == 1) {
        body = {
        bodyType: 'image',
        content: vm.url
        }
      } else {
      
        var vidId;
        if(vm.url.indexOf("youtube.com/watch?v=") !== -1)//https://m.youtube.com/watch?v=e3S9KINoH2M
        {
            vidId = vm.url.substr(vm.url.indexOf("youtube.com/watch?v=") + 20);
        }
        else if(vm.url.indexOf("youtube.com/watch/?v=") !== -1)//https://m.youtube.com/watch/?v=e3S9KINoH2M
        {
            vidId = vm.url.substr(vm.url.indexOf("youtube.com/watch/?v=") + 21);
        }
        else if(vm.url.indexOf("youtu.be") !== -1)
        {
            vidId = vm.url.substr(vm.url.indexOf("youtu.be") + 9);
        }
        else if(vm.url.indexOf("www.youtube.com/embed/") !== -1)
        {
            vidId = vm.url.substr(vm.url.indexOf("www.youtube.com/embed/") + 22);
        }
        else if(vm.url.indexOf("?v=") !== -1)// http://m.youtube.com/?v=tbBTNCfe1Bc
        {
            vidId = vm.url.substr(vm.url.indexOf("?v=")+3, 11);
        }
        else
        {
            console.warn("YouTubeUrlNormalize getVidId not a youTube Video: "+vm.url);
            vidId = null;
        }
   
        if(vidId.indexOf("&") !== -1)
        {
            vidId = vidId.substr(0, vidId.indexOf("&") );
        }
        if(vidId != null) {
          vm.url = "https://www.youtube.com/embed/"+vidId;
        }
       
        body = {
        bodyType: 'embed',
        content: vm.url
        }
      }
      aggAppPosts.addPost(vm.title,vm.userID,body,vm.description,vm.tags,0,0,{}).then(
        function success(res) {
          aggAppUsers.getUserByID(vm.userID).then( 
            function success (rezultat) {
              console.log(rezultat)
              
              rezultat.data.posts.push(res.data._id);
              aggAppUsers.updateUser(vm.userID, rezultat.data).then(
               function success(r) {
                 vm.response = 'success'
                 console.log(r)
               },
               function error(e) {
                 vm.response = 'errorUpdate'
                 console.log(e)
               }
              );
            },
            function error(eror) {
              console.log(eror)
              vm.response = 'errorGet'
            }
          );
        
        console.log(res);
      },
      function error(err) {
        console.error(err);
        vm.response = 'errorAdd'
      }  
      );
    }
  }
  
  addPostsCtrl.$inject = ['$rootScope','$routeParams','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('addPostsCtrl', addPostsCtrl);
})();