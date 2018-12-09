var express = require('express');
var router = express.Router();

var ctrlUserIdentities = require('../controllers/userIdentities');
var ctrlUsers = require('../controllers/users');
var ctrlPosts = require('../controllers/posts');
//var ctrlUsers = require("../controllers/users");

// userIdentitites
router.get("/userIdentities", ctrlUserIdentities.getAll);
/*router.get("/userIdentities/:idUserIdentities", );
router.post("/userIdentities", );
router.put("/userIdentities/:idUserIdentities", );
router.delete("/userIdentities/:idUserIdentities", );*/

// users
router.get("/users", ctrlUsers.getAll);
//router.get("/users", ctrlUsers.getAll);


// posts
router.get("/posts", ctrlPosts.getAll);

module.exports = router;