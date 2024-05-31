const express = require('express');
const Models = require('./models');

const router = express.Router();


router.get('/getPrize', async (req, res) => {
    try {
        const data = await Models.Prize.aggregate([
            {
                $lookup: {
                    from: "prizedescriptions",
                    localField: "_id",
                    foreignField: "prizeId",
                    as: "description"
                }
            }, {
                $unwind: "$description"
            }, {
                $unset: [
                    "createdAt",
                    "updatedAt",
                    "description.createdAt",
                    "description.updatedAt"
                ]
            }
        ]);
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/addPrize', async (req, res) => {
    try {
        let obj = {
            hackathonId: req.body?.hackathonId,
            category: req.body?.category,
            name: req.body?.name,
            amount: req.body?.amount
        }
        const prize = new Models.Prize(obj);
        const prizes = await prize.save();

        if (prizes) {
            let desc = {
                prizeId: prizes._id,
                question: req.body?.question,
                answer: req.body?.answer
            }

            const description = new Models.PrizeDescription(desc);
            const descriptions = await description.save();
            if (descriptions) {
                res.json({
                    prizes,
                    descriptions
                });
            }
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