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
      vm.titleRes='false'
      vm.urlRes='false'
      vm.desRes='false'
      vm.tagsRes='false'
      var ch=0;
      var regTag = new RegExp("^(#[a-žA-Ž0-9]+(\ )?)+$");
      if(!regTag.test(vm.tags)){
        ch=1;
        vm.tagsRes='true'
      }
      //var regSrc=new RegExp("^(?=.{1,50}$)[a-zA-Z0-9#]+$");
      //var regOp= new RegExp("^(?=.{1,500}$)");
      var regOp= new RegExp("^(?=.{1,500}$)[a-žA-Ž0-9#-.!?(\ )]+$");
      if(!regOp.test(vm.description)){
        ch=1;
        vm.desRes='true'
      }
      var regWbL= new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
      if(vm.typeID3 && !regWbL.test(vm.url)){
        ch=1;
        vm.urlRes='true'
      }
      //var regTitle= new RegExp("^(?=.{1,20}$)");
      var regTitle= new RegExp("^(?=.{1,20}$)[a-žA-Ž0-9(\ )]+$");
      if(!regTitle.test(vm.title)){
        ch=1;
        vm.titleRes='true'
      }
      if(ch==0){
      aggAppPosts.addPost(vm.title,vm.userID,body,vm.description,vm.tags,0,0,{}).then(
        function success(res) {
          aggAppUsers.getUserByID(vm.userID).then( 
            function success (rezultat) {
              console.log(rezultat)
              
              rezultat.data.posts.push(res.data._id);
              aggAppUsers.updateUser(vm.userID, rezultat.data).then(
               function success(r) {
                 vm.response = 'success'
                  vm.title = undefined
                  vm.url = undefined
                  vm.description = undefined
                  vm.tags = undefined
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
  }
  
  addPostsCtrl.$inject = ['$rootScope','$routeParams','aggAppPosts','aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('addPostsCtrl', addPostsCtrl);
})();