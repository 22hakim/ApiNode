const express = require('express');
const { addUser,getUser,getUserByFisrtname,deleteUser } = require('../Controller/UserController');
const router = express.Router();

router.route("/users/:firstname").get(getUserByFisrtname);
router.route("/users").get(getUser);
router.route("/users").post(addUser);
router.route("/users").delete(deleteUser);

module.exports = router;