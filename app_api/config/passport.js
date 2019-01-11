var passport = require('passport');
var LokalnaStrategija = require('passport-local').Strategy;
var mongoose = require('mongoose');
var UserIdentity = require('../models/userIdentity');
var UserIdentity = mongoose.model('UserIdentity');
var User = require('../models/user');
var User = mongoose.model('User');


passport.use(new LokalnaStrategija({
    usernameField: 'email',
    passwordField: 'password'
  }, 
  function(email, password, koncano) {
    console.log('prisel v passport preverjanje')
    console.log(email);
    console.log(password);
    UserIdentity.findOne(
      {
        email: email
      },
      function(napaka, userIdentity) {
        console.log(userIdentity);
        if (napaka)
          return koncano(napaka);
        if (!userIdentity) {
          return koncano(null, false, {
            sporocilo: 'Napačno uporabniško ime'
          });
        }
        if (!userIdentity.preveriGeslo(password)) {
          return koncano(null, false, {
            sporocilo: 'Napačno geslo'
          });
        }
        else {
          User.findOne(
             {
              identity: userIdentity._id
             },
             function(napaka, user) {
               if(napaka){
                 console.log('Napaka pri pridobivanju uporabnika');
               }
               if(user){
                 return koncano(null, user);
               }
               else {
                 console.log('Ni inicializiran uporabnik');
               }
             }
            );
        }
      }
    );
  }
));