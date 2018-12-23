(function() {
  function addPostCtrl($uibModalInstance) {
    var vm = this;
    vm.modalnoOkno = {
      preklici: function() {
        $uibModalInstance.close();
      }
    };
  }
  addPostCtrl.$inject = ['$uibModalInstance'];

  /* global angular */
  angular
    .module('aggApp')
    .controller('addPostCtrl', addPostCtrl);
})();