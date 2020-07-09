# e_commerce_web

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://newuser31:<password>@cluster0-9ph9m.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});