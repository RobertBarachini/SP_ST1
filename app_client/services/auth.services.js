(function() {
  function auth($window, $http) {
    var saveToken = function(zeton) {
      $window.localStorage['Aggregate-token'] = zeton;
    };
    
    var getToken = function() {
     return $window.localStorage['Aggregate-token'];
    };
    
    var registration = function(user) {
      return $http.post('/api/registracija', user).then(
        function success(odgovor) {
          saveToken(odgovor.data.zeton);
        });
    };

    var login = function(user) {
      return $http.post('/api/prijava', user).then(
        function success(odgovor) {
          saveToken(odgovor.data.zeton);
        });
    };

    var logout = function() {
      $window.localStorage.removeItem('Aggregate-token');
    };
    
      var isLoggedIn = function() {
        var token = getToken();
        if (token) {
          var koristnaVsebina = JSON.parse($window.atob(token.split('.')[1]));
          return koristnaVsebina.datumPoteka > Date.now() / 1000;
        } else {
          return false;
        }
        
      var currentUser = function() {
        if (isLoggedIn()) {
          var zeton = getToken();
          var koristnaVsebina = JSON.parse($window.atob(zeton.split('.')[1]));
          return {
              //TODO: dobit podatke ki rabis iz tokena
            email: koristnaVsebina.email,
            name: koristnaVsebina.name
          };
        }
      };
  };
    
    return {
      saveToken: saveToken,
      getToken: getToken,
      registration: registration,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      currentUser: currentUser
    };
  }
  auth.$inject = ['$window', '$http'];
  
  /* global angular */
  angular
    .module('aggApp')
    .service('auth', auth);
})();