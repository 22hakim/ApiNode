const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(connectionString);

const db = async() =>
{
    let conn;
    try {
      conn = await client.connect();
    } catch(e) {
      console.error(e);
    }
    return conn.db("ApiNode");
} 


module.exports = {db};