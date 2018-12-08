var me = module.exports;

var mongoose = require('mongoose');
var UserIdentity = mongoose.model('UserIdentity');

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

me.getUserIdentities = function(zahteva, odgovor) {
  //vrniJsonOdgovor(odgovor, 200, {"status": "uspesno"});
  
  /*UserIdentity
    .findById(zahteva.params.idLokacije)
    .exec(function(napaka, neki) {
      vrniJsonOdgovor(odgovor, 200, neki); 
    });*/
  UserIdentity
    .find()
    .exec(function(napaka, podatki) {
      vrniJsonOdgovor(odgovor, 200, podatki); 
    });
};