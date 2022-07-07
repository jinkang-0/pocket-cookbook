// setup express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// use cors for cross-origin requests
const cors = require('cors');
app.use(cors());

// get configs
require('dotenv').config({ path: './config.env' });

// setup db
const dbo = require('./db/connect');

// setup routes
app.use(require('./routes/recipes'));

// start server
app.listen(port, () => {
    dbo.connect((err) => {
        if (err)
            console.error(err);
    });
    console.log("Server is running on port", port);
});

