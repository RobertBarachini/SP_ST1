(function(){
  function indexCtrl($scope,$rootScope,$uibModal, aggAppPosts, aggAppUsers){
    var vm = this;
    vm.naslov = "Laka";
    vm.posts = [];
    vm.pages=0;
    vm.maxNaStran=10;
      
    aggAppPosts.getPosts().then(
      function success(res){
        //vm.posts = res.data;
        //console.log(vm.posts)
        
        vm.posts = [];
        var tempPosts=[]
        tempPosts = res.data;
        vm.pages=tempPosts.length;
        vm.strani=Math.ceil(vm.pages/vm.maxNaStran);
        vm.trenStran=1;
        var trenLen =  vm.pages;
        var j=0;
          var zac=(vm.trenStran-1)*vm.maxNaStran
          var kon=zac+vm.maxNaStran
          
          if(vm.trenStran*vm.maxNaStran > trenLen){
            kon = kon - (vm.trenStran*vm.maxNaStran - trenLen)
          }
          for(var i=zac; i<kon; i++){
            vm.posts.push(tempPosts[i])
            j++;
          }
        console.log(res)
        tempPosts=[]
      },
      function error(er){
        console.error(er);
      } 
      );
      aggAppUsers.getUsers().then(
          function success(ress) {
            vm.users = ress.data;
            console.log(ress)
          },
          function error(err) {
            console.error(err);
          }
          );
      
    vm.modalOkno= function(){
     $uibModal.open({
        templateUrl:'/modalnaOkna/addPost/addPost.controller.html',
        controller: 'addPostCtrl',
        controllerAs: 'vm'
      });
    };
    
    vm.checkBtn = function(posId){
      
        var ind = $rootScope.rootUser.postReactions.indexOf(posId);
        if(ind==-1){
          return "btn-circle btn-circle-default";
        } else {
          return "btn-circle btn-circle-success";
        }
      
    }
    
    vm.reactP = function(posId){
      var ind = $rootScope.rootUser.postReactions.indexOf(posId);
      if(ind==-1){
        //like
        vm.user=$rootScope.rootUser;
        vm.user.postReactions.push(posId)
        aggAppPosts.getPostByID(posId).then( //dubi post
              function success(ress){
                vm.post = ress.data;
                vm.post.likes=vm.post.likes + 1;
                aggAppUsers.updateUser(vm.user._id, vm.user).then( //update user
                  function success(resss){
                    aggAppPosts.editPost(vm.post._id, vm.post.title,vm.post.owner,vm.post.body,vm.post.description,vm.post.hashtags,vm.post.likes,vm.post.dislikes,vm.post.comments).then( //update post
                      function success(resss){
                        vm.response = 'success'
                      },
                      function error(errrr){
                        console.error(errrr);
                        vm.response = 'errorPost'
                      } 
                      );
                  },
                  function error(errr){
                    console.error(errr);
                    vm.response = 'errorUser'
                  } 
                  );
              },
              function error(err){
                console.error(err);
                vm.response = 'errorPost'
              } 
            );
      } else {
        vm.user=$rootScope.rootUser;
        vm.user.postReactions.splice(ind,1)
        aggAppPosts.getPostByID(posId).then( //dubi post
              function success(ress){
                vm.post = ress.data;
                vm.post.likes=vm.post.likes - 1;
                aggAppUsers.updateUser(vm.user._id, vm.user).then( //update user
                  function success(resss){
                    aggAppPosts.editPost(vm.post._id, vm.post.title,vm.post.owner,vm.post.body,vm.post.description,vm.post.hashtags,vm.post.likes,vm.post.dislikes,vm.post.comments).then( //update post
                      function success(resss){
                        vm.response = 'success'
                      },
                      function error(errrr){
                        console.error(errrr);
                        vm.response = 'errorPost'
                      } 
                      );
                  },
                  function error(errr){
                    console.error(errr);
                    vm.response = 'errorUser'
                  } 
                  );
              },
              function error(err){
                console.error(err);
                vm.response = 'errorPost'
              } 
            );
      }
    }
    
    vm.search = function(loT){
      console.log("blaa");
      var celStr=vm.searchStr;
      var regSrc=new RegExp("^(?=.{1,50}$)[a-žA-Ž0-9#(\ )]+$");
      if(regSrc.test(celStr)){
      if(loT==1 && celStr!=undefined && celStr!=''){
      var words=vm.searchStr.split(" ");
      aggAppPosts.getPosts().then(
      function success(res){
        vm.posts=[]
        vm.postsTemp = res.data;
        for(var i=0; i<vm.postsTemp.length; i++){
          var com=celStr.toLowerCase().localeCompare(vm.postsTemp[i].title.toLowerCase())
          if(com==0 ){ // || (com!=1 && celStr.length <= vm.postsTemp[i].title.length)
            vm.posts.push(vm.postsTemp[i]);
          } else {
            for(var j=0; j<vm.postsTemp[i].hashtags.length; j++){
              for(var k=0; k<words.length; k++){
                var tempH=words[k];
                if(words[k].charAt(0)!="#"){
                  tempH="#"+words[k];
                }
                
                if(tempH.toLowerCase()==vm.postsTemp[i].hashtags[j].toLowerCase()){
                  vm.posts.push(vm.postsTemp[i]);
                  j=vm.postsTemp[i].hashtags.length
                }
              }
            }
          }
        }
        console.log(res)
      },
      function error(er){
        console.error(er);
      } 
      );
      } /*else {
        vm.searchStr=undefined;
        aggAppPosts.getPosts().then(
          function success(res){
            vm.posts = res.data;
            console.log(res)
          },
          function error(er){
            console.error(er);
          } 
          );
      }*/
    }else vm.searchStr=undefined;
    }
    
    vm.newPage = function(p){
      if(p>=0 && p<=vm.strani && p!=vm.trenStran){
        if(p==0){
          p=1;
        }
        vm.trenStran=p;
        aggAppPosts.getPosts().then(
        function success(res){
          var tempPosts=[]
          tempPosts = res.data;
          vm.posts=[]
          var trenLen = tempPosts.length;
          
          var j=0;
          var zac=(vm.trenStran-1)*vm.maxNaStran
          var kon=zac+vm.maxNaStran
          
          if(vm.trenStran*vm.maxNaStran > trenLen){
            kon = kon - (vm.trenStran*vm.maxNaStran - trenLen)
          }
          for(var i=zac; i<kon; i++){
            vm.posts.push(tempPosts[i])
            j++;
          }
          tempPosts=[]
          
          console.log(res)
        },
        function error(er){
          console.error(er);
        } 
        );
      }
    }
    
  }
  
  indexCtrl.$inject = ['$scope','$rootScope','$uibModal','aggAppPosts', 'aggAppUsers'];
  
  /* global angular */
  angular
    .module('aggApp')
    .controller('indexCtrl', indexCtrl);
}
)();