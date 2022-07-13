require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// db routes
const connectDb = require('./connect').connect;
app.use('/api/recipes', require('./api/recipes'));
app.use('/api/verification', require('./api/verification'));

// production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, "./client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    });
}

// start server
app.listen(port, () => {
    connectDb((err) => {
        if (err)
            console.log("Error connecting to MongoDB:", err);
    });
    console.log("Server is running on port", port);
});

