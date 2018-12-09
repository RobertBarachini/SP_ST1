var express = require('express');
var router = express.Router();

var ctrlUserIdentities = require('../controllers/userIdentities');
var ctrlUsers = require('../controllers/users');
var ctrlPosts = require('../controllers/posts');
//var ctrlUsers = require("../controllers/users");

// userIdentitites
router.get("/userIdentities", ctrlUserIdentities.getAll);
router.get("/userIdentities/:userIdentityId", ctrlUserIdentities.getById);
/*router.get("/userIdentities/:idUserIdentities", );
router.post("/userIdentities", );
router.put("/userIdentities/:idUserIdentities", );
router.delete("/userIdentities/:idUserIdentities", );*/

// users
router.get("/users", ctrlUsers.getAll);
router.get("/users/:userId", ctrlUsers.getById);
//router.get("/users", ctrlUsers.getAll);


// posts
router.get("/posts", ctrlPosts.getAll);
router.get("/posts/:postId", ctrlPosts.getById)
router.delete("/posts/:postId", ctrlPosts.deleteById)

module.exports = router;