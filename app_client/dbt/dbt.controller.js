(function(){
    function dbtCtrl($http){
        var vm = this;
        vm.responseD='';
        vm.responseI='';
        vm.init = function(){
            
        vm.responseD='';
        vm.responseI='';
            console.log("init");
            //return $http.get("/api/db/init")
            $http.get("/api/db/init").then(
                function success(res){
                    vm.responseI='success';
                },
                  function error(er){
                    vm.responseI='error';
                    console.error(er);
                  } 
            );
        }
        
        vm.drop = function(){
            
        vm.responseD='';
        vm.responseI='';
            console.log("drop");
            $http.get("/api/db/drop").then(
                function success(res){
                    vm.responseD='success';
                },
                  function error(er){
                    vm.responseD='error';
                    console.error(er);
                  } 
            );
        }
    }
    
    dbtCtrl.$inject = ['$http'];
    
    /* global angular */
  angular
    .module('aggApp')
    .controller('dbtCtrl', dbtCtrl);
})();