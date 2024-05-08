const express = require('express');
const ObjectId = require("mongoose").Types.ObjectId;
const SubmissionModels = require('../submission/models');

const router = express.Router();

// Hackathon
router.get('/totalPoints/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const data = await SubmissionModels.SubmissionKey.find({submitedBy: userId}).count()
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;