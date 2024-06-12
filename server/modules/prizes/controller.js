const express = require('express');
const Models = require('./models');

const router = express.Router();


router.get('/getPrize', async (req, res) => {
    try {
        const data = await Models.Prize.find({})
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/addPrize', async (req, res) => {
    try {
        const prize = new Models.Prize(req.body);
        const prizes = await prize.save();

        if (prizes) {
            res.json(prizes);
        }
    } catch (error) {
        res.send(error);
    }
});

router.put('/updatePrize/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const cate = await Models.Prize.findOneAndUpdate({ _id: id }, body);
        if (cate) {
            res.json({
                success: true,
                data: cate
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deletePrize/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Models.Prize.findOneAndDelete({ _id: id });
        if (data) {
            res.json({
                success: true,
                message: 'Delete Prize'
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updatePrizeDescription/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const cate = await Models.PrizeDescription.findOneAndUpdate({ _id: id }, body);
        if (cate) {
            res.json({
                success: true,
                data: cate
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deletePrizeDescription/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Models.PrizeDescription.findOneAndDelete({ _id: id });
        if (data) {
            res.json({
                success: true,
                message: 'Delete Category'
            });
        };
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;