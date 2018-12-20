(function() {
  var glava = function() {
    return {
      restrict: "EA",
      templateUrl: "/layout/glava/glava.controller.html"
    };
  };

  /* global angular */
  angular
    .module("aggApp")
    .directive("glava", glava);
})();