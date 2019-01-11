var passport = require('passport');
var mongoose = require('mongoose');
var UserIdentity = require('../models/userIdentity');
var UserIdentity = mongoose.model('UserIdentity');
var User = require('../models/user');
var User = mongoose.model('User');

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

//implementacija metode za registracijo uporabnika TODO: ko se registrira nastavi privzeto vlogo!
module.exports.registracija = function(zahteva, odgovor) {
  if (!zahteva.body.email || 
  !zahteva.body.password || 
  !zahteva.body.username ||
  !zahteva.body.name ||
  !zahteva.body.surname ||
  !zahteva.body.profilePic
  ) {
    console.log(zahteva.body);
    vrniJsonOdgovor(odgovor, 400, {
      "message": "Missing data"
    });
  }
  
  var userIdentity = new UserIdentity();
  var id = mongoose.Types.ObjectId();
  userIdentity._id = id;
  userIdentity.email = zahteva.body.email;
  userIdentity.nastaviGeslo(zahteva.body.password);
  console.log("New identity:\n" + userIdentity + "\n");
  
  userIdentity.save(function(napaka) {
    if (napaka) {
     vrniJsonOdgovor(odgovor, 500, napaka);
    } else {
      var user = new User();
      user.identity = userIdentity._id;
      user.username = zahteva.body.username;
      user.name = zahteva.body.name;
      user.surname = zahteva.body.surname;
      user.profilePicture = zahteva.body.profilePic;
      console.log("New user:\n" + user + "\n");
      
      user.save(function(napaka) {
        if (napaka) {
         vrniJsonOdgovor(odgovor, 500, napaka);
        } else {
         vrniJsonOdgovor(odgovor, 200, {
           "zeton": user.generirajJwt()
         });
        }
      });
    }
  });
};

//implementacija metode za prijavo
module.exports.prijava = function(zahteva, odgovor) {
  if (!zahteva.body.email || !zahteva.body.password) {
    vrniJsonOdgovor(odgovor, 400, {
      "sporočilo": "Zahtevani so vsi podatki"
    });
  }
  passport.authenticate('local', function(napaka, uporabnik, podatki) {
    if (napaka) {
      vrniJsonOdgovor(odgovor, 404, napaka);
      return;
    }
    if (uporabnik) {
      vrniJsonOdgovor(odgovor, 200, {
        "zeton": uporabnik.generirajJwt()
      });
    } else {
      vrniJsonOdgovor(odgovor, 401, podatki);
    }
  })(zahteva, odgovor);
};