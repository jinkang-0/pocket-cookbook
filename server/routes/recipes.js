const express = require('express');
const { ObjectId } = require('mongodb');
const recipeRoutes = express.Router();
const dbo = require('../db/connect');

// get requests
recipeRoutes.route('/recipes').get(async (req, res) => {
    const db = dbo.getDb();
    const data = await db.collection('recipes').find().toArray();
    res.json(data);
})

recipeRoutes.route('/recipes/:id').get(async (req, res) => {
    const db = dbo.getDb();
    var id;
    try { 
        id = ObjectId(req.params.id)
        await db.collection('recipes').findOne({ _id: id }, (err, data) => {
            if (err)
                throw err;
            res.json(data);
        });
    }
    catch { res.sendStatus(404) }
});



// post requests
recipeRoutes.route('/recipes/add').post(async (req, res) => {
    const db = dbo.getDb();
    await db.collection('recipes').insertOne(req.body);
    res.sendStatus(200);
});

module.exports = recipeRoutes;
