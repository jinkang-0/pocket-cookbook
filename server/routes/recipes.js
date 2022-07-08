const express = require('express');
const { ObjectId } = require('mongodb');
const recipeRoutes = express.Router();
const dbo = require('../db/connect');

// get requests
recipeRoutes.route('/recipes/:id').get((req, res) => {
    const db = dbo.getDb();
    const id = ObjectId(req.params.id);
    await db.collection('recipes').findOne({ _id: id }, (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
});



// post requests
recipeRoutes.route('/recipes/add').post(async (req, res) => {
    const db = dbo.getDb();
    await db.collection('recipes').insertOne(req.body);
    res.sendStatus(200);
});

module.exports = recipeRoutes;
