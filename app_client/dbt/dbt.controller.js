(function(){
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }
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
                    sleep(7000);
                    vm.responseI='success';
                },
                  function error(er){
                    sleep(7000);
                    vm.responseI='error';
                    //console.error(er);
                  } 
            );
        }
        
        vm.drop = function(){
            
        vm.responseD='';
        vm.responseI='';
            console.log("drop");
            $http.get("/api/db/drop").then(
                function success(res){
                    sleep(7000);
                    vm.responseD='success';
                },
                  function error(er){
                    sleep(7000);
                    vm.responseD='error';
                    //console.error(er);
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