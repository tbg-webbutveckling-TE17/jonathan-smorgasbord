const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mongodbUser:<>@cluster0-roob3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Database created!");
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  // perform actions on the collection object
  client.close();
});