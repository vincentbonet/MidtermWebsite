const { MongoClient, ObjectID } = require('mongodb');

const url = process.env.MONGO_URL;
const databaseName = process.env.MONGO_DB;

async function connect() {
    const client = new MongoClient(url, {
        serverApi: {
            version: '1',
            strict: true,
            deprecationErrors: true
        }
    });
    await client.connect();
    const database = client.db(database);
    return databaseName;
}

module.exports = { connect, ObjectID };
