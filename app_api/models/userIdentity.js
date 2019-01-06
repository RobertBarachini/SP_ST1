var mongoose = require('mongoose');
// userType determines is a user is mod or admin

var userIdentityShema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  salt: {type: String, required: true},
  userType: {type: String, required: false, default: "user"}
});
// userType: user / admin - if user is not logged in we do not assume his identity

mongoose.model('UserIdentity', userIdentityShema, 'UserIdentities');