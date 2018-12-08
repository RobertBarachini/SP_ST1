var me = module.exports;

var mongoose = require('mongoose');
var UserIdentity = mongoose.model('UserIdentity');

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

// Basic CRUD
me.getAll = function(req, res) {
  try {
    UserIdentity
      .find()
      .exec(function(err, data) {
        if(err || !data) {
          console.log("Napaka:\n" + err.stack);
          vrniJsonOdgovor(res, 404, { message: "Data not found" });
        }
        else {
          vrniJsonOdgovor(res, 200, data); 
        }
      });
  } catch(ex) { console.log("Evade server crash:\n" + ex); }
};