const express = require('express');
const { addUser,getUser,getUserByFisrtname } = require('../Controller/UserController');
const router = express.Router();

const {db} = require("../DB/db.js");


router.route("/users/:firstname").get(getUserByFisrtname);
router.route("/users").get(getUser);
router.route("/users").post(addUser);

router.get("/", async (req, res) => {
    const client = await db();
    let collection = await client.collection("user");
    let results = await collection.find({})
      .limit(50)
      .toArray();
    res.send(results).status(200);
  });

module.exports = router;