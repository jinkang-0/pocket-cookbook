const express = require('express');
const verificationRoutes = express.Router();
const dbo = require('../connect');

// get requests
verificationRoutes.route('/').get(async (req, res) => {
    const db = dbo.getDb();
    const data = await db.collection('misc').findOne({data: "verificationCode"});
    res.json(data);
});

module.exports = verificationRoutes;
