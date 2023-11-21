const { User } = require("../Models/User");
const {db} = require("../DB/db.js");

const getUser = async(req, res)=>{
    try {
        const client = await db();
        let collection = client.collection("user");
        let results = await collection.find({})
        .limit(50)
        .toArray();
        res.status(200).send(results);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUserByFisrtname = async(req, res)=>{
    try {
        const client = await db();
        let result = await client.collection("user").findOne({ firstname : req.params.firstname});
        if (!result) res.status(404).send("Not found");
        else res.status(200).send(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const addUser = async(req, res)=>{
    try {
        let user = new User(req.body.firstname, req.body.lastname);
        const client = await db();
        let result = await client.collection("user").insertOne(user);
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteUser = async(req, res)=>{
    try {
        const client = await db();
        let collection = client.collection("user");
        let result = collection.deleteOne({ firstname : req.body.firstname});
        if (!result) res.status(404).send("Not found");
        else res.status(200).send("document deleted");
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { addUser, getUser, getUserByFisrtname, deleteUser};