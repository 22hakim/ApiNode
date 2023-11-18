const { MongoClient } = require('mongodb');

async function connect(url) {
    const client = new MongoClient(url);
    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally 
    {
        await client.close();
    }
}

async function listDatabases(client){
    
    const databasesList = await client.db().admin().listDatabases(); 
    console. log ("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db. name}`);
    })
}

module.exports = { connect , listDatabases};