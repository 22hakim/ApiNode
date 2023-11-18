const express = require('express');
const { addUser,getUser,getUserByFisrtname } = require('../Controller/UserController');
const router = express.Router();

router.route("/users/:firstname").get(getUserByFisrtname);
router.route("/users").get(getUser);
router.route("/users").post(addUser);

module.exports = router;