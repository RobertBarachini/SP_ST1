(function(){
    function dbtCtrl($http){
        var vm = this;
        vm.init = function(){
            console.log("init");
            return $http.get("/api/db/init")
        }
        
        vm.drop = function(){
            console.log("drop");
            return $http.get("/api/db/drop")
        }
    }
    
    dbtCtrl.$inject = ['$http'];
    
    /* global angular */
  angular
    .module('aggApp')
    .controller('dbtCtrl', dbtCtrl);
})();