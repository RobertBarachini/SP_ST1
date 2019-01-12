(function(){
  function config($routeProvider, $locationProvider, $sceDelegateProvider){
    $routeProvider
      .when('/', {
        templateUrl: "components/index.controller.html",
        controller: "indexCtrl",
        controllerAs: "vm"
      })
      .when('/posts/:id', {
        templateUrl:"posts/post.controller.html",
        controller:"postsCtrl",
        controllerAs:"vm"
      })
      .when('/users/:id', {
        templateUrl:"users/user.controller.html",
        controller:"usersCtrl",
        controllerAs:"vm"
      })
      .when('/users/:id/:idd', {
        templateUrl:"addPosts/addPost.controller.html",
        controller:"addPostsCtrl",
        controllerAs:"vm"
      })
      .when('/login', {
        templateUrl:"login/login.controller.html",
        controller:"loginCtrl",
        controllerAs:"vm"
      })
      .when('/register',{
        templateUrl:"register/register.controller.html",
        controller: "registerCtrl",
        controllerAs:"vm"
      })
      .when('/editProfile/:id',{
        templateUrl:"editProfile/editProfile.controller.html",
        controller: "editProfileCtrl",
        controllerAs:"vm"
      })
      .when('/editPost/:id',{
        templateUrl:"posts/editPost.controller.html",
        controller: "editPostCtrl",
        controllerAs:"vm"
      })
      .when('/db',{
        templateUrl:"dbt/dbt.controller.html",
        controller: "dbtCtrl",
        controllerAs:"vm"
      })
      .otherwise({ redirectTo: "/" });
      
    $locationProvider.html5Mode(true);
     $sceDelegateProvider.resourceUrlWhitelist([
      'self', 'https://www.youtube.com/**', 'https://www.mixcloud.com/**', 'https://www.soundcloud.com/**', 'https://w.soundcloud.com/**'
    ]);
  }
   /* global angular */
  angular
    .module('aggApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', config]);
})();