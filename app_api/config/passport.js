var passport = require('passport');
var LokalnaStrategija = require('passport-local').Strategy;
var mongoose = require('mongoose');
var UserIdentity = require('../models/userIdentity');
var UserIdentity = mongoose.model('UserIdentity');


passport.use(new LokalnaStrategija({
    usernameField: 'email',
    passwordField: 'password'
  }, 
  function(userName, geslo, koncano) {
    UserIdentity.findOne(
      {
        email: userName
      },
      function(napaka, uporabnik) {
        if (napaka)
          return koncano(napaka);
        if (!uporabnik) {
          return koncano(null, false, {
            sporocilo: 'Napačno uporabniško ime'
          });
        }
        if (!uporabnik.preveriGeslo(geslo)) {
          return koncano(null, false, {
            sporocilo: 'Napačno geslo'
          });
        }
        return koncano(null, uporabnik);
      }
    );
  }
));