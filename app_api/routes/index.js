var express = require('express');
var router = express.Router();

var ctrlUserIdentities = require('../controllers/userIdentities');

/* userIdentitites */
router.get("/userIdentities", ctrlUserIdentities.getUserIdentities);
/*router.get("/userIdentities/:idUserIdentities", );
router.post("/userIdentities", );
router.put("/userIdentities/:idUserIdentities", );
router.delete("/userIdentities/:idUserIdentities", );*/

module.exports = router;