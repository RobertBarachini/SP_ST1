var me = module.exports;

var mongoose = require('mongoose');
var UserIdentity = mongoose.model('UserIdentity');

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

// Basic CRUD

me.getAll = function(req, res) {
  if(req.params) { // && other checks like req.params.someId
    try {
      UserIdentity
        .find()
        .exec(function(err, data) {
          if(!data) {
            console.log("Napaka: Not found");
            vrniJsonOdgovor(res, 404, { "message": "Data not found" });
          }
          else if (err) {
            console.log("Napaka:\n" + err.stack);
            vrniJsonOdgovor(res, 500, { "message": "Internal error.", "error": err });
          }
          else {
            // SUCCESS
            vrniJsonOdgovor(res, 200, data); 
          }
        });
    } catch(ex) { console.log("Evade server crash:\n" + ex); }
  }
  else {
    console.log("Napaka: Missing parameters");
    vrniJsonOdgovor(res, 400, { "message": "Missings parameters." });
  }
};

me.getById = function(req, res) {
  if(req.params) { // && other checks like req.params.someId
    try {
      UserIdentity
        .findById(req.params.userIdentityId)
        .exec(function(err, data) {
          if(!data) {
            console.log("Napaka: Not found");
            vrniJsonOdgovor(res, 404, { "message": "Data not found" });
          }
          else if (err) {
            console.log("Napaka:\n" + err.stack);
            vrniJsonOdgovor(res, 500, { "message": "Internal error.", "error": err });
          }
          else {
            // SUCCESS
            vrniJsonOdgovor(res, 200, data); 
          }
        });
    } catch(ex) { console.log("Evade server crash:\n" + ex); }
  }
  else {
    console.log("Napaka: Missing parameters");
    vrniJsonOdgovor(res, 400, { "message": "Missings parameters." });
  }
};