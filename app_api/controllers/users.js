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

// Basic CRUD

me.getAll = function(req, res) {
  if(req.params) { // && other checks like req.params.someId
    try {
      User
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
      User
        .findById(req.params.userId)
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

me.deleteById = function(req, res) {
  if(req.params) { // && other checks like req.params.someId
    try {
      User
        .findByIdAndRemove(req.params.userId)
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

me.addNew = function(req, res) {
  //console.log(req.body);
  var s = req.body;
  var newObject = {
    identity: s.identity,
    username: s.username,
    name: s.name,
    surname: s.surname,
    profilePicture: s.profilePicture,
    posts: s.posts,
    postReactions: s.postReactions,
    points: s.points,
    dateJoined: s.dateJoined,
    dateLastActive: s.dateLastActive
  }
  User.create(newObject,
    function(err, data) {
      if(err) {
        vrniJsonOdgovor(res, 400, err);
      }
      else {
        vrniJsonOdgovor(res, 201, data);
      }
    }
  );
};

me.updateObject = function(req, res) {
  var ids = req.params.userId;
  if (!ids) {
    vrniJsonOdgovor(res, 400, { "message": "Missing _id parameter."});
    return;
  }
  var s = req.body;

  User
    .findById(ids)
    .exec(
      function(err, data) {
        if (!data) {
          vrniJsonOdgovor(res, 404, { "message": "Data not found" });
          return;
        } 
        else if (err) {
          vrniJsonOdgovor(res, 500, err);
          return;
        }
        
        data.identity = s.identity;
        data.username = s.username;
        data.name = s.name;
        data.surname = s.surname;
        data.profilePicture = s.profilePicture;
        data.posts = s.posts;
        data.postReactions = s.postReactions;
        data.points = s.points;
        data.dateJoined = s.dateJoined;
        data.dateLastActive = s.dateLastActive;

        data.save(function(err, data) {
          if (err) {
            vrniJsonOdgovor(res, 400, err);
          } 
          else {
            vrniJsonOdgovor(res, 200, data);
          }
        });
      }
    );
}