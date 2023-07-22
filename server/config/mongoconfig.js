const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://diagnosys:${process.env.DB_PSWD}@cluster0.kzkgwyq.mongodb.net/`;
const dbName = 'diagnosys';
let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    dbInstance = db;
    return dbInstance;
  } catch (err) {
    throw err;
  }
}

module.exports = connectToDatabase;

