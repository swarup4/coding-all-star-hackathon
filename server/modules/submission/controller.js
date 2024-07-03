require("dotenv").config();

const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const Models = require("./models");
const ReviewModel = require("../reviews/models");
const PointModel = require("../points/models");
const userMiddleware = require('../../middleware/user');
const SubmissionMiddleware = require('../../middleware/submission');

const router = express.Router();


// User API 
router.post('/addApi', userMiddleware.varifyToken, SubmissionMiddleware.checkApiExist, async (req, res) => {
    try {
        const model = new Models.UserAPIs(req.body);
        const api = await model.save();
        if (api) {
            res.json(api);
        };
    } catch (error) {
        res.send(error);
    }
})

router.get('/getApiList/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const api = await Models.UserAPIs.aggregate([
            {
                $match: {
                    userId: new ObjectId(id),
                    status: true
                }
            }, {
                $lookup: {
                    from: "submissionkeys",
                    localField: "_id",
                    foreignField: "apiId",
                    as: "submission"
                }
                  }, {
                    $lookup: {
                        from: "reviews",
                        localField: "_id",
                        foreignField: "apiId",
                        as: "review"
                    }
            }, {
                $unwind: {
                  path: "$submission",
                  preserveNullAndEmptyArrays: true
                }
              }, {
                $lookup: {
                    from: "users",
                    localField: "review.reviewerId",
                    foreignField: "_id",
                    as: "reviewUser"
                }
            },
            {
                $unset: "review"
            }
        ])

        if (api) {
            res.json(api);
        }
    } catch (error) {
        res.send(error);
    }
})

router.get('/getApiDetails/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const api = await Models.UserAPIs.findOne({ _id: id })
        if (api) {
            res.json(api);
        }
    } catch (error) {
        res.send(error);
    }
})

router.put('/updateApiDetails/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body;
        const code = await Models.UserAPIs.findOneAndUpdate({ _id: id }, body, {
            returnOriginal: false
        })
        if (code) {
            res.json({
                success: true,
                data: code
            });
        };
    } catch (error) {
        res.send(error);
    }
})

router.put('/saveCode/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const code = await Models.UserAPIs.findOneAndUpdate({ _id: id }, body, {
            returnOriginal: false
        })
        if (code) {
            res.json({
                success: true,
                data: code
            });
        };
    } catch (error) {
        res.send(error);
    }
})

router.get('/getStatusCount', userMiddleware.varifyToken, (req, res) => {
    Models.UserAPIs.find({ status: 1 }).count().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
})

router.put('/saveUnitTestCode/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const code = await Models.UnitTest.findOneAndUpdate({ _id: id }, body, {
            returnOriginal: false
        });
        if (code) {
            res.json({
                success: true,
                data: code
            });
        };
    } catch (error) {
        res.send(error);
    }
})


// API Submission
router.put("/submitApi/:id", userMiddleware.varifyToken, SubmissionMiddleware.updateSubmissionApiStatus, SubmissionMiddleware.getApiInfo, async (req, res) => {
    try {
        const id = req.params.id;

        let obj = {
            submitedBy: req.apiData.userId,
            apiId: id,
            hackathonId: req.apiData.hackathonId,
            endPointVersion: req.apiData.apiVersion,
            apiEndPoint: req.apiData.apiEndPoint,
        }
        const model = new Models.SubmissionKey(obj);
        const api = await model.save();

        let pointObj = {
            userId: req.apiData.userId,
            apiId: id,
            point: 1,
            category: "submit",
        }
        let point = await SubmissionMiddleware.addPoint(pointObj, res)
        res.json(api);

    } catch (error) {
        res.send(error);
    }
});

router.get("/getAllSubmittedApiList/:id", userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const reviewList = await Models.SubmissionKey.aggregate([
            {
                $match: {
                    apiStatus: 0,
                    submitedBy: {
                        $ne: new ObjectId(id)
                    }
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "submitedBy",
                    foreignField: "_id",
                    as: "user"
                }
            }, {
                $lookup: {
                    from: "submissions",
                    localField: "apiId",
                    foreignField: "_id",
                    as: "api"
                }
            }, {
                $lookup: {
                    from: "reviews",
                    localField: "api._id",
                    foreignField: "apiId",
                    as: "review"
                }
            }, {
                $unwind: "$user"
            }, {
                $lookup: {
                    from: "users",
                    localField: "user.manager",
                    foreignField: "_id",
                    as: "managerInfo"
                }
            }, {
                $unwind: "$managerInfo",
            }, {
                $unwind: "$api"
            }, {
                $project: {
                    userId: "$submitedBy",
                    apiId: "$apiId",
                    hackathonId: "$hackathonId",
                    name: "$user.name",
                    email: "$user.email",
                    manager: "$managerInfo.name",
                    apiName: "$api.name",
                    apiEndPoint: "$api.apiEndPoint",
                    apiVersion: "$api.apiVersion",
                    programmingLanguage: "$api.programmingLanguage",
                    review: "$review"
                }
            }
        ])
        res.json(reviewList)
    } catch (error) {
        res.send(error)
    }
})

router.get('/getSubmissionCount/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const userId = req.params.id

        const submissionCount = await Models.SubmissionKey.find({ submitedBy: userId }).count();
        const reviewCount = await ReviewModel.Review.find({ reviewerId: userId }).count();
        const approvePointCount = await PointModel.Point.find({ userId: userId, category: 'review', point: 2 }).count();
        const rejectPointCount = await PointModel.Point.find({ userId: userId, category: 'review', point: -1 }).count();

        res.json({
            submission: submissionCount,
            review: reviewCount,
            approveCount: approvePointCount,
            rejectCount: rejectPointCount
        })
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
