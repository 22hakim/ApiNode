const express = require('express');
const { connect, listDatabases } = require('./DB/connexion');
const userRoutes = require("./Routes/userRoutes");
const app = express();

const PORT = 5333

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/api/v1",userRoutes);


connect('mongodb://127.0.0.1:27017/').catch(console.error);


app.listen(PORT, 'localhost', () => {
    console.log(`server running on port ${PORT}`)
})