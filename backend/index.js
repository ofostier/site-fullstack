import express from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = 4000;

app.use(express.json());
dotenv.config();


const uri2 = "mongodb+srv://sandy:bw26vKuhJ3bwGOmU@fullstack-mern.ehft6.mongodb.net/?retryWrites=true&w=majority";
const uri1 = "mongodb+srv://olivier:olivier@cluster0.0dnct0x.mongodb.net/?retryWrites=true&w=majority";
const uri = process.env.MONGODB_URI4;
const database = process.env.DATABASE;
const collection = process.env.COLLECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get("/", (_, res) => {
    //res.send("Hello Express !")
    client.connect((err, db) => {
        console.log("connecté avec succès à la db")
        if (err || !db) {return false}
        db.db(database).collection(collection).find().toArray( function (err, results){
            if (!err) {
                res.status(200).send(results);
            }
            else {
                console.log(err)
            }
        })
        //client.close();
      });
})


const obj = {title: "title", content: "content"}
app.post("/insert", (req, res) => {
    console.log(req.body)
    
    client.connect((err, db) => {
      console.log("connecté avec succès à la db")
      if (err || !db) { return false }
      db.db(database).collection(collection).insertOne(req.body, function(err, results) {
        if(!err) {
          res.status(200).send(results);
        }
      })
    })
  })

app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})