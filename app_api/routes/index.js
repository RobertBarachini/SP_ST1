var express = require('express');
var router = express.Router();

var ctrlUserIdentities = require('../controllers/userIdentities');
var ctrlUsers = require('../controllers/users');
var ctrlPosts = require('../controllers/posts');
var ctrlDbInit = require("../controllers/dbInit");
var ctrlAuthentication = require('../controllers/authentication');
//var ctrlUsers = require("../controllers/users");

// userIdentitites
router.get("/userIdentities", ctrlUserIdentities.getAll);
router.get("/userIdentities/:userIdentityId", ctrlUserIdentities.getById);
router.delete("/userIdentities/:userIdentityId", ctrlUserIdentities.deleteById)
router.post("/userIdentities", ctrlUserIdentities.addNew);
router.put("/userIdentities/:userIdentityId", ctrlUserIdentities.updateObject);

/* Avtentikacija 
    ZAENKRAT ZA TESTIRANJE, POTEM POTREBNO ZAMENJAT LOGIN IN REGISTRATION!!! TODO:
*/
router.post('/registracija', ctrlAuthentication.registracija);
router.post('/prijava', ctrlAuthentication.prijava);

// users
router.get("/users", ctrlUsers.getAll);
router.get("/users/:userId", ctrlUsers.getById);
router.delete("/users/:userId", ctrlUsers.deleteById)
router.post("/users", ctrlUsers.addNew);
router.put("/users/:userId", ctrlUsers.updateObject);
router.post("/users/:userId/reactToPost/:postId", ctrlUsers.addPostReaction);
router.delete("/users/:userId/reactToPost/:postId", ctrlUsers.removePostReaction);

// posts
router.get("/posts", ctrlPosts.getAll);
router.get("/posts/:postId", ctrlPosts.getById)
router.delete("/posts/:postId", ctrlPosts.deleteById)
router.post("/posts", ctrlPosts.addNew);
router.put("/posts/:postId", ctrlPosts.updateObject);
router.put("/posts/:postId/addComment", ctrlPosts.addComment);
router.delete("/posts/:postId/removeComments", ctrlPosts.removeComments);
//router.delete("/posts/:postId", ctrlPosts.removeUsersComments);

// init
router.get("/db/init", ctrlDbInit.init);
router.get("/db/drop", ctrlDbInit.drop);

module.exports = router;