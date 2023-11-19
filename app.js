const express = require('express');
const userRoutes = require("./Routes/userRoutes");
const app = express();

const PORT = 5333

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/api/v1",userRoutes);


app.listen(PORT, 'localhost', () => {
    console.log(`server running on port ${PORT}`)
})