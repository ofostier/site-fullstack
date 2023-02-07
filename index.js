import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

const app = express();
const port = 4000;

dotenv.config();


const uri2 = "mongodb+srv://olivier:olivier@cluster0.0dnct0x.mongodb.net/?retryWrites=true&w=majority";
const uri = process.env.MONGODB_URI || uri2;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get('/hello', (req, res) => {
    res.send('Hello EXPRESS Worldz!!!!!');
});


app.get('/', (_, res) => {
    client.connect((err, db) => {
        console.log("Connected successfully to server");
        if (err ||!db) throw new Error("Connect error to MongoDB");

        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        if(err) throw new Error("Connect error to MongoDB");
      
        client.close();
      });
});

app.listen(port, () => {
        console.log("server is running on port " + port);

})