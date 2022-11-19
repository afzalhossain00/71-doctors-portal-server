const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000
require('dotenv').config()

const app = express()

//middleware
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eqk1vsl.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {
        const appointOptionCollection = client.db('doctorsPortal').collection('appointOptions')

    }



    finally {

    }


}
run().catch(console.log)

app.get('/', async (req, res) => {
    res.send('doctors portal server is running')
})

app.listen(port, () => console.log(`Doctors portal running on ${port}`))