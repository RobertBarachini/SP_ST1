var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
//var UserIdentity = require('../models/userIdentity');
//var UserIdentity = require("UserIdentity");

var userShema = new mongoose.Schema({
  identity: {type: ObjectId, unique: true, required: true},
  username: {type: String, unique: true, required: true},
  name: {type: String, required: false},
  surname: {type: String, required: false},
  profilePicture: {type: String, required: false},
  posts: [ObjectId],
  postReactions: [ObjectId],
  points: {type: Number, "default": 0},
  dateJoined: {type: Date, required: false},
  dateLastActive: {type: Date, required: false}
}, { versionKey: false });

userShema.methods.nastaviGeslo = function(geslo) {
  console.log('Nastavi geslo');
  this.identity.salt = crypto.randomBytes(16).toString('hex');
  this.identity.password = crypto.pbkdf2Sync(geslo, this.identity.salt, 1000, 64, 'sha512').toString('hex');
};

//preveri geslo tako da dešifrira shranjeno geslo
userShema.methods.preveriGeslo = function(geslo) {
  var password = crypto.pbkdf2Sync(geslo, this.identity.salt, 1000, 64, 'sha512').toString('hex');
  return this.identity.password == password;
};

//generiranje JWT
userShema.methods.generirajJwt = function() {
  var datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
  
  return jwt.sign({
    _id: this._id,
    email: this.identity.email,
    name: this.name,
    datumPoteka: parseInt(datumPoteka.getTime() / 1000, 10)
  }, process.env.JWT_GESLO);
};

mongoose.model("User", userShema, "Users");