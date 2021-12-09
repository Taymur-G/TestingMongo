const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, dataObj) => {
    try {
        await client.connect();
        const db = client.db("TestingDB");
        const collection = db.collection("movies");
        await crudFunc(collection, dataObj);
        client.close();
    } catch (e) {
        console.log(error);
    }
};

module.exports = connection;