var me = module.exports;

var mongoose = require('mongoose');
var UserIdentity = require('../models/userIdentity');
var UserIdentity = mongoose.model('UserIdentity');
var User = require('../models/user');
var User = mongoose.model('User');
var Post = require('../models/post');
var Post = mongoose.model('Post');

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
};

me.init = function(req, res) {
  
};

me.drop = function(req, res) {
  
};

// Basic CRUD

/*me.getAll = function(req, res) {
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
};*/