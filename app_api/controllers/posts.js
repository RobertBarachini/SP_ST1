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
      Post
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
      Post
        .findById(req.params.postId)
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
      Post
        .findByIdAndRemove(req.params.postId)
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

/*me.updatePostReactions = function(req, res) {
  if(req.params) { // && other checks like req.params.someId
    try {
      User
        .findById(req.params.postId)
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

me.addNew = function(req, res) {
  //console.log(req.body);
  var s = req.body;
  var newObject = {
    title: s.title,
    owner: s.owner,
    body: s.body,
    description: s.description,
    hashtags: s.hashtags,
    likes: s.likes,
    dislikes: s.dislikes,
    comments: s.comments
  }
  Post.create(newObject,
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
  var ids = req.params.postId;
  if (!ids) {
    vrniJsonOdgovor(res, 400, { "message": "Missing _id parameter."});
    return;
  }
  var s = req.body;

  Post
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
        
        data.title = s.title;
        data.owner =  s.owner;
        data.body = s.body;
        data.description = s.description;
        data.hashtags = s.hashtags;
        data.likes = s.likes;
        data.dislikes = s.dislikes;
        data.comments = s.comments;

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