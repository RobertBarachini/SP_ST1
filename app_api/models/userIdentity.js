var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
// userType determines is a user is mod or admin

var userIdentityShema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  //salt: {type: String, required: true},
  userType: {type: String, required: false, default: "user"}
});
// userType: user / admin - if user is not logged in we do not assume his identity

userIdentityShema.methods.nastaviGeslo = function(geslo) {
  console.log('Nastavi geslo');
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(geslo, this.salt, 1000, 64, 'sha512').toString('hex');
};

//preveri geslo tako da dešifrira shranjeno geslo
userIdentityShema.methods.preveriGeslo = function(geslo) {
  console.log("Preveri geslo");
  var password = crypto.pbkdf2Sync(geslo, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.password == password;
};

mongoose.model('UserIdentity', userIdentityShema, 'UserIdentities');