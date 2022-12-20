const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.port || 5000;
const app = express();
//middleware
app.use(cors());
app.use(express.json());


//InternshipAssessment
//OSZzPrDsLJXfMWhy







const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b9snwll.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        const usersCollection = client.db('InternshipAssessment').collection('users');
    }
    finally {

    }
}
run().catch(console.log.dir)


app.use('/', (req, res) => {
    res.send('Internship Assessment');
})

app.listen(port, () => {
    console.log(`server is running ${port}`);
})