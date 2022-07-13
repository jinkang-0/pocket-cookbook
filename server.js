require('dotenv').config({ path: './config.env' });
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// setup db
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});
const db = client.db("pocket-cookbook");

async function connectDb() {
    // connect
    await client.connect();

    // establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB.");
}

// db routes
app.get('/api/recipes', async (req, res) => {
    const data = await db.collection('recipes').find().sort({ name: 1 }).toArray();
    res.json(data);
});

app.get('/api/verification', async (req, res) => {
    const data = await db.collection('misc').findOne({ data: "verificationCode" });
    res.json(data);
});

app.get('/api/recipes/:id', (req, res) => {
    try {
        const id = ObjectId(req.param.id);
        db.collection('recipes').findOne({ _id: id }, (err, data) => {
            if (err)
                throw err;
            res.json(data);
        });
    } catch {
        res.sendStatus(404);
    }
});

app.post('/api/recipes/add', async (req, res) => {
    await db.collection('recipes').insertOne(req.body);
    res.sendStatus(200);
});


// production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, "./client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    });
}

// start server
app.listen(port, () => {
    connectDb();
    console.log("Server is running on port", port);
});

