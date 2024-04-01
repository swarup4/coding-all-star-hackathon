const express = require('express');
const Models = require('./models');

const router = express.Router();


// Prize
router.get('/getPrize', async (req, res) => {
    try {
        const data = await Models.Prize.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "options",
                    foreignField: "_id",
                    as: "subCategory",
                },
            }, {
                $unset: ["options", "createdAt", "updatedAt", "status"],
            }, {
                $project: {
                    name: "$name",
                    subCategory: {
                        $reduce: {
                            input: "$subCategory",
                            initialValue: [],
                            in: {
                                $concatArrays: ["$$value",
                                    [{
                                        $mergeObjects: ["$$this", {
                                            checked: false,
                                        }]
                                    }]
                                ]
                            }
                        }
                    }
                }
            }
        ]);
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/addPrize', async (req, res) => {
    try {
        const model = new Models.Prize(req.body);
        const cate = await model.save();
        console.log(cate);
        if (cate) {
            res.json(cate);
        };
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


// Prize Description
router.post('/addPrizeDescription', async (req, res) => {
    try {
        const model = new Models.PrizeDescription(req.body);
        const data = await model.save();
        if (data) {
            res.json(data);
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