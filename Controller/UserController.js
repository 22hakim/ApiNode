const { User } = require("../Models/User");
const {db} = require("../DB/db.js");

const getUser = async(req, res)=>{
    try {
        const client = await db();
        let collection = client.collection("user");
        let results = await collection.find({})
        .limit(50)
        .toArray();
        res.send(results).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getUserByFisrtname = async(req, res)=>{

    try {
        let user = new User(req.body.firstname);
        const client = await db();
        let result = client.collection("user").findOne(user);
        console.log(result);
        res.send(result).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

    // try {
    //     let user = new User(req.body.firstname);

    //     let result = await client.openDbConnexion().collection("user").findOne(user);

    //     res.status(200).json({result});

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json(error);
    // }
};

const addUser = async(req, res)=>{
    try {
        let user = new User(req.body.firstname, req.body.lastname);

        let result = await client.openDbConnexion().collection("user").insertOne(user);
        
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { addUser,getUser,getUserByFisrtname };