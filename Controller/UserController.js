const { User } = require("../Models/User");
const client = require("../DB/connexion");

const getUser = async(req, res)=>{
    try {
        let user = new User('Camille', 'Saillard');
        res.status(200).json({user});

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
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

module.exports = { addUser,getUser };