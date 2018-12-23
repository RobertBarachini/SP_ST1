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
      .otherwise({ redirectTo: "/" });
      
    $locationProvider.html5Mode(true);
  }
   /* global angular */
  angular
    .module('aggApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', config]);
})();