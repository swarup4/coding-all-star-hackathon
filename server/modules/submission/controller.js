require("dotenv").config();

const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const Models = require("./models");
const ReviewModel = require("../reviews/models");
const userMiddleware = require('../../middleware/user');
const pointMiddleware = require('../../middleware/point');

const router = express.Router();

function checkApiExist(req, res, next) {

    const endPoint = req.body.apiEndPoint;
    const version = req.body.apiVersion;

    Models.UserAPIs.find({
        apiEndPoint: endPoint, apiVersion: version
    }).then(api => {
        if (api.length > 0) {
            console.log("More than 1 ===>>> ", api);
            res.status(500).send("Someone already Submit the API")
        } else {
            next()
        }
    }).catch(err => {
        console.log("Error ===>>> ", err);
        res.send(err);
    });
}

function updateApiStatus(req, res, next) {
    const id = req.params.id;

    Models.UserAPIs.findOneAndUpdate({ _id: id }, { submitStatus: 1 }, {
        returnOriginal: false
    }).then(res => {
        next()
    }).catch(err => {
        res.send(err);
    });
}

function getApiInfo(req, res, next) {
    const id = req.params.id;

    Models.UserAPIs.findOne({
        _id: id
    }).then(api => {
        req.apiData = api;
        next()
    }).catch(err => {
        res.send(err);
    });
}

function updateApiSubmission(req, res) {
    const id = req.params.id
    const body = req.body

    Models.SubmissionKey.findOneAndUpdate({ _id: id }, body, {
        returnOriginal: false
    }).then(res => {
        res.json({
            status: 200,
            message: "success"
        })
    }).catch(err => {
        res.send(err);
    });
}

// User API 
router.post('/addApi', userMiddleware.varifyToken, checkApiExist, async (req, res) => {
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
                    userId: new ObjectId(id)
                }
            }, {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "apiId",
                    as: "review"
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "review.reviewerId",
                    foreignField: "_id",
                    as: "reviewUser"
                }
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
        const body = req.body
        console.log(body);
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
router.put("/submitApi/:id", userMiddleware.varifyToken, updateApiStatus, getApiInfo, async (req, res) => {
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
        let point = await pointMiddleware.addPoint(pointObj, res)
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


router.put('/updateSubmissionStatus/:id', userMiddleware.varifyToken, updateApiSubmission);

router.get('/getSubmissionCount/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const userId = req.params.id

        const submissionCount = await Models.SubmissionKey.find({ submitedBy: userId }).count();
        const reviewCount = await ReviewModel.Review.find({ reviewerId: userId }).count();

        res.json({
            submission: submissionCount,
            review: reviewCount,
        })
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
