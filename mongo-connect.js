const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  // "mongodb+srv://root:root@cluster0.t95xw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // "mongodb://localhost:27017/"
  "mongodb://localhost:27017/mydb";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    console.log("Conectado");
    
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);