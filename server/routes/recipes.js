const express = require('express');
const recipeRoutes = express.Router();
const dbo = require('../db/connect');

recipeRoutes.route('/test').get((req, res) => {
    const db = dbo.getDb();
    db.collection("recipes").find().toArray((err, results) => {
        if (err)
            throw err;
        res.json(results);
        console.log(results);
    });
});

module.exports = recipeRoutes;
