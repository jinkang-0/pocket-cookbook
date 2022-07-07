const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});

var _db;

module.exports = {
    connect: (callback) => {
        client.connect((err, db) => {
            if (db) {
                _db = db.db("pocket-cookbook");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: () => {
        return _db;
    }
};
