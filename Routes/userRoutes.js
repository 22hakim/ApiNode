const express = require('express');
const { addUser,getUser } = require('../Controller/UserController');
const router = express.Router();

router.route("/users").get(getUser);
router.route("/users").post(addUser);

module.exports = router;