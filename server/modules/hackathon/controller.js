const express = require('express');
const ObjectId = require("mongoose").Types.ObjectId;
const Models = require('./models');

const router = express.Router();


// Hackathon
router.get('/getHackathonList', async (req, res) => {
    try {
        const data = await Models.Hackathon.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user",
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "panels",
                    foreignField: "_id",
                    as: "panels",
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "appliedUser",
                    foreignField: "_id",
                    as: "appliedUser",
                }
            }, {
                $unwind: "$user",
            }, {
                $unset: [
                    "userId", "user.password", "user.reporty", "user.createdAt", "user.updatedAt",
                    "panels.password", "panels.reporty", "panels.createdAt", "panels.updatedAt",
                    "appliedUser.password", "appliedUser.reporty", "appliedUser.createdAt", "appliedUser.updatedAt"
                ]
            }
        ])
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.get('/getHackathon/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Models.Hackathon.aggregate([
            {
                $match: {
                    _id: new ObjectId(id),
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user",
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "panels",
                    foreignField: "_id",
                    as: "panels",
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "appliedUser",
                    foreignField: "_id",
                    as: "appliedUser",
                }
            }, {
                $unwind: "$user",
            }, {
                $unset: [
                    "userId", "user.password", "user.reporty", "user.createdAt", "user.updatedAt",
                    "panels.password", "panels.reporty", "panels.createdAt", "panels.updatedAt",
                    "appliedUser.password", "appliedUser.reporty", "appliedUser.createdAt", "appliedUser.updatedAt"
                ]
            }
        ])
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
        const data = await Models.Hackathon.findOneAndUpdate({ _id: id }, { status: 0 });
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


router.put('/applyHackathon/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.body.userId;
        const apply = await Models.Hackathon.findOneAndUpdate({ _id: id }, { $push: { appliedUser: userId } });

        if (apply) {
            res.json({
                success: true,
                message: 'User has applied for the Hackathon'
            });
        }
    } catch (error) {
        res.send(error);
    }
});

router.get('/getAllPanelist', async (req, res) => {
    try {
        const panels = await Models.Hackathon.aggregate([
            {
                $unwind: "$panels"
            }, {
                $group: {
                    _id: "$panels"
                },
            }, {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "panel"
                }
            }, {
                $unset: "_id"
            }, {
                $unwind: "$panel"
            }
        ]);

        if (panels) {
            res.json(panels);
        }
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;