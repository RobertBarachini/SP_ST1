var mongoose = require('mongoose');

var userIdentityShema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

mongoose.model('UserIdentity', userIdentityShema, 'UserIdentities');