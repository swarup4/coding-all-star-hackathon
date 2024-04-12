const express = require('express');
const Models = require('./models');

const router = express.Router();


// Prize
router.get('/getHackathon', async (req, res) => {
    try {
        const data = await Models.Hackathon.find({});
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/addHackathon', async (req, res) => {
    try {
        const model = new Models.Hackathon(req.body);
        const data = await model.save();
        if (data) {
            res.json(data);
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateHackathon/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Models.Hackathon.findOneAndUpdate({ _id: id }, body);
        if (data) {
            res.json({
                success: true,
                data: data
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/deleteHackathon/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Models.Hackathon.findOneAndUpdate({ _id: id }, {status: 0});
        if (data) {
            res.json({
                success: true,
                message: 'Close Hackathon'
            });
        };
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;