(function(){
  function config($routeProvider, $locationProvider, $sceDelegateProvider){
    $routeProvider
      .when('/', {
        templateUrl: "components/index.controller.html",
        controller: "indexCtrl",
        controllerAs: "vm"
      }).otherwise({ redirectTo: "/" });
      
    $locationProvider.html5Mode(true);
  }
   /* global angular */
  angular
    .module('aggApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', config]);
})();