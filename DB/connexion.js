const { MongoClient, Db } = require('mongodb');

var client = null;

function connect(url,callback){
    if (client == null) {
        client = new MongoClient(url);
        client.connect(erreur => {
            if(erreur){
                client = null;
                callback(erreur);
            }else{
                callback();
            }
        })
    }else{
        callback();
    }
}

function openDbConnexion(){
    return new Db(client, 'testdb');
}

function closeDbConnexion(){
    if(client != null)
    {
        client.close();
        client = null;
    }
}

module.exports= {connect, closeDbConnexion, openDbConnexion};