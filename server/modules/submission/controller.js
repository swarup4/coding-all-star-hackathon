require("dotenv").config();

const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const Models = require("./models");
const { Review } = require("../reviews/models");
const { Point } = require("../points/models");
const { varifyToken } = require('../../middleware/user');
const {
    checkApiExist, deleteSubmission, deletePoints,
    deleteSubmissionKey, updateSubmissionApiStatus, getApiInfo, addPoint
} = require('../../middleware/submission');

const router = express.Router();


// User API 
router.post('/addApi', varifyToken, checkApiExist, async (req, res) => {
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

router.get('/getApiList/:id', varifyToken, async (req, res) => {
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

router.get('/getApiDetails/:id', varifyToken, async (req, res) => {
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

router.put('/updateApiDetails/:id', varifyToken, async (req, res) => {
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

router.put('/saveCode/:id', varifyToken, async (req, res) => {
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

router.get('/getStatusCount', varifyToken, (req, res) => {
    Models.UserAPIs.find({ status: 1 }).count().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
})

router.put('/saveUnitTestCode/:id', varifyToken, async (req, res) => {
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

router.delete('/deleteApi/:id', deletePoints, deleteSubmissionKey, deleteSubmission)


// API Submission
router.put("/submitApi/:id", varifyToken, updateSubmissionApiStatus, getApiInfo, async (req, res) => {
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
        let point = await addPoint(pointObj, res)
        res.json(api);

    } catch (error) {
        res.send(error);
    }
});

router.get("/getAllSubmittedApiList/:id", varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const reviewList = await Models.SubmissionKey.aggregate([
            {
                $match: {
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

router.get("/getAllUserSubmittedApiList", async (req, res) => {
    try {
        const apiList = await Models.UserAPIs.aggregate([
            {
                $match: {
                    submitStatus: true
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: "$user"
            },
            {
                $addFields: {
                    userName: "$user.name"
                }
            },
            {
                $unset: "user"
            },
            {
                $lookup: {
                    from: "submissionkeys",
                    localField: "_id",
                    foreignField: "apiId",
                    as: "submit"
                }
            },
            {
                $unwind: "$submit"
            },
            {
                $addFields: {
                    apiStatus: "$submit.apiStatus"
                }
            },
            {
                $unset: "submit"
            },
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "apiId",
                    as: "review"
                }
            },
            {
                $unwind: "$review"
            },
            {
                $lookup: {
                    from: "users",
                    localField: "review.reviewerId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: "$user"
            },
            {
                $addFields: {
                    "review.name": "$user.name",
                    "review.profilePics": "$user.profilePics",
                    "review.email": "$user.email"
                }
            },
            {
                $unset: [
                    "user",
                    "createdAt",
                    "updatedAt",
                    "review.createdAt",
                    "review.updatedAt",
                    "review.reply"
                ]
            },
            {
                $group: {
                    _id: {
                        _id: "$_id",
                        userId: "$userId",
                        userName: "$userName",
                        hackathonId: "$hackathonId",
                        name: "$name",
                        apiEndPoint: "$apiEndPoint",
                        apiVersion: "$apiVersion",
                        documentationLink: "$documentationLink",
                        programmingLanguage: "$programmingLanguage",
                        description: "$description",
                        submitStatus: "$submitStatus",
                        status: "$status",
                        apiStatus: "$apiStatus"
                    },
                    reviews: {
                        $push: "$review"
                    }
                }
            },
            {
                $project: {
                    _id: "$_id._id",
                    userId: "$_id.userId",
                    userName: "$_id.userName",
                    hackathonId: "$_id.hackathonId",
                    name: "$_id.name",
                    apiEndPoint: "$_id.apiEndPoint",
                    apiVersion: "$_id.apiVersion",
                    documentationLink: "$_id.documentationLink",
                    programmingLanguage: "$_id.programmingLanguage",
                    description: "$_id.description",
                    submitStatus: "$_id.submitStatus",
                    status: "$_id.status",
                    apiStatus: "$_id.apiStatus",
                    review: "$reviews"
                }
            }
        ])
        res.json(apiList)
    } catch (error) {
        res.send(error)
    }
})

router.get('/getSubmissionCount/:id', varifyToken, async (req, res) => {
    try {
        const userId = req.params.id

        const submissionCount = await Models.SubmissionKey.find({ submitedBy: userId }).count();
        const reviewCount = await Review.find({ reviewerId: userId }).count();
        const approvePointCount = await Point.find({ userId: userId, category: 'review', point: 2 }).count();
        const rejectPointCount = await Point.find({ userId: userId, category: 'review', point: -1 }).count();

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
