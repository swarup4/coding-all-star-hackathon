const express = require('express');
const ObjectId = require("mongoose").Types.ObjectId;
const multer = require('multer');
const Models = require('./models');
const UserModels = require('../user/models');
const userMiddleware = require('../../middleware/user');
const hackathonMiddleware = require('../../middleware/hackathon');
const { paticipateEmployee, unparticipateEmployee, submitedUser } = require('../../middleware/dashboard')

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });


// Hackathon
router.get('/getHackathonList', userMiddleware.varifyToken, async (req, res) => {
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

router.get('/getHackathon/:isAdmin/:id', userMiddleware.varifyToken, async (req, res) => {
    const id = req.params.id;
    const isAdmin = req.params.isAdmin;
    try {
        const hackathonData = await Models.Hackathon.aggregate([
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

        if (isAdmin == 'false') {
            let panelData = hackathonData[0].panels.map(async x => {
                x.social = await UserModels.Contacts.findOne({ userId: x._id })
                return x
            })
            hackathonData[0].panels = await Promise.all(panelData)

            let participateData = hackathonData[0].appliedUser.map(async x => {
                x.social = await UserModels.Contacts.findOne({ userId: x._id })
                return x
            })
            hackathonData[0].appliedUser = await Promise.all(participateData)
        }

        res.json(hackathonData);
    } catch (error) {
        res.send(error);
    }
});


router.get('/getApplyHackathon/:userId', userMiddleware.varifyToken, async (req, res) => {
    const userId = req.params.userId;
    try {
        const data = await Models.Hackathon.find({ appliedUser: userId })
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/addHackathon', userMiddleware.varifyToken, async (req, res) => {
    try {
        let body = req.body;

        let date = new Date();
        date.setDate(date.getDate() + 2)
        body.expireAt = date;

        const model = new Models.Hackathon(body);
        const data = await model.save();
        if (data) {
            res.json(data);
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateHackathon/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Models.Hackathon.findOneAndUpdate({ _id: id }, body, {
            returnOriginal: false
        });
        if (data) {
            res.json(data);
        };
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deleteHackathon/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Models.Hackathon.findByIdAndRemove(id);
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

router.put('/applyHackathon/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.body.userId;
        const apply = await Models.Hackathon.findOneAndUpdate({ _id: id }, { $push: { appliedUser: userId } }, {
            returnOriginal: false
        });

        let pipeline = [
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
        ]
        const data = await Models.Hackathon.aggregate(pipeline)

        if (data) {
            res.json({
                success: true,
                message: 'User has applied for the Hackathon',
                data: data[0]
            });
        }
    } catch (error) {
        res.send(error);
    }
});

/*
router.get('/getAllPanelist', async (req, res) => {
    try {
        const panels = await Models.Hackathon.aggregate([
            {
                $unwind: "$panels"
            }, {
                $group: {
                    _id: "$panels"
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "panel"
                }
            }, {
                $unwind: "$panel"
            }, {
                $lookup: {
                    from: "usercontacts",
                    localField: "panel._id",
                    foreignField: "userId",
                    as: "panel.contact"
                }
            }, {
                $unwind: {
                    path: "$panel.contact",
                    preserveNullAndEmptyArrays: true
                }
            }, {
                $unset: [
                    "_id", "panel.password", "panel.createdAt", "panel.updatedAt", "panel.contact._id",
                    "panel.contact.userId", "panel.contact.createdAt", "panel.contact.updatedAt"
                ]
            }
        ]);

        if (panels) {
            res.json(panels);
        }
    } catch (error) {
        res.send(error);
    }
})
*/

router.put('/uploadBanner/:id', upload.single("banner"), hackathonMiddleware.uploadBanner, async (req, res) => {
    try {
        let id = req.params.id;
        const banner = await Models.Hackathon.findOneAndUpdate(
            { _id: id },
            { banner: req.fileName },
            { returnOriginal: false }
        );

        if (banner) {
            res.json({
                success: true,
                data: req.fileName,
                message: 'Banner picture uploaded successfully'
            });
        }
    } catch (error) {
        res.send(error);
    }
});

router.get('/getParticipateEmployee', paticipateEmployee);

router.get('/getUnparticipateEmployee/:id', unparticipateEmployee);

router.get('/getSubmitedUser', submitedUser)


module.exports = router;