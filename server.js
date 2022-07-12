require('dotenv').config({ path: './config.env' });

// setup express
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./client/build")));

// setup db
const dbo = require('./connect');
app.use(require('./routes/recipes'));

// view routes
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
})

// start server
app.listen(port, () => {
    dbo.connect((err) => {
        if (err)
            console.error(err);
    });
    console.log("Server is running on port", port);
});

