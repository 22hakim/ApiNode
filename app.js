const express = require('express');
const { connect } = require('./DB/connexion');
const userRoutes = require("./Routes/userRoutes");
const app = express();

const PORT = 5333


app.get('/',(req,res,next)=>res.json({status:200, msg:'Hello Hakim'}))
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/api/v1",userRoutes);


connect('mongodb://127.0.0.1:27017/',(erreur)=>{
    if(erreur){
        console.log("erreur lors de la connexion a la base de donnée");
        process.exit(-1);
    }else{

       
        console.log("connexion avec la bdd réussie");
    }
});

 
app.listen(PORT, 'localhost', () => {
    console.log(`server running on port ${PORT}`)

})