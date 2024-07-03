const moment = require('moment');

const PointsModel = require('../modules/points/models');
const ReviewModel = require('../modules/reviews/models');
const SubmissionModel = require('../modules/submission/models');

const Submission = {
    addPoint: async (body, res) => {
        try {
            const model = new PointsModel.Point(body)
            let point = await model.save()
            if (point) {
                return point;
            }
        } catch (error) {
            res.json(error)
        }
    },

    getPoint: async (body, res) => {
        try {
            let point = await PointsModel.Point.find({ apiId: body.apiId, category: "review" });
            if (point) {
                return point;
            }
        } catch (error) {
            res.json(error)
        }
    },

    approveApi: async (body) => {
        try {
            console.log("Call")
            const model = new ReviewModel.Review(body);
            const review = await model.save();
            console.log("Success")
            if (review) {
                return review;
            }
        } catch (error) {
            console.log(error)
        }
    },

    rejectApi: async (req, res, next) => {
        try {
            let body = req.body;
            if (body.codeVerification == 2) {
                console.log("Calling")
                console.log(body)
                await Submission.approveApi(body);
                let obj = {
                    userId: body.apiUserId,
                    apiId: body.apiId,
                    point: -1,
                    category: "review",
                }

                let point = await Submission.getPoint(obj, res)

                if (point.length == 0) {
                    let addPoint = await Submission.addPoint(obj, res)
                    let updateStatus = await Submission.updateApiStatus(body.apiId, 2)
                    res.json("Reject Point Add")
                } else {
                    res.json("API Already Rejected")
                }
            } else {
                next()
            }
        } catch (error) {
            res.json(error)
        }
    },

    updateApiStatus: async (apiId, status) => {
        try {
            const body = { apiStatus: status }
            let data = await SubmissionModel.SubmissionKey.findOneAndUpdate({ apiId: apiId }, body, {
                returnOriginal: false
            });
            return data;
        } catch (error) {
            return error
        }
    },

    checkApiExist: async (req, res, next) => {
        const endPoint = req.body.apiEndPoint;
        // const version = req.body.apiVersion;

        SubmissionModel.UserAPIs.find({
            apiEndPoint: endPoint,
            status: true
            // apiVersion: version
        }).then(api => {
            if (api.length > 0) {
                res.status(500).send("Someone already Submit the API")
            } else {
                next()
            }
        }).catch(err => {
            res.send(err);
        });
    },

    getApiInfo: (req, res, next) => {
        const id = req.params.id;
        SubmissionModel.UserAPIs.findOne({
            _id: id
        }).then(api => {
            req.apiData = api;
            next()
        }).catch(err => {
            res.send(err);
        });
    },

    updateSubmissionApiStatus: (req, res, next) => {
        const id = req.params.id;
        SubmissionModel.UserAPIs.findOneAndUpdate({ _id: id }, { submitStatus: 1 }, {
            returnOriginal: false
        }).then(res => {
            next()
        }).catch(err => {
            res.send(err);
        });
    },

    getUnSubmittedApiList: async () => {
        try {
            let apiList = await SubmissionModel.UserAPIs.find({ submitStatus: false, status: true })
            return apiList
        } catch (error) {
            console.log(error)
        }
    },

    checkDateDifference: (data) => {
        let createdAt = data.createdAt
        const now = moment();
        const differenceInDays = now.diff(createdAt, 'days');

        return differenceInDays > 2 ? true : false
    },

    rejectUnsubmittedApis: async () => {
        try {
            let arr = [];
            let list = await Submission.getUnSubmittedApiList()
            for (const i of list) {
                if(Submission.checkDateDifference(i)){
                    arr.push(SubmissionModel.UserAPIs.findOneAndUpdate({ _id: i._id }, {status: false}))
                }
            }

            if(arr.length > 0){
                await Promise.allSettled(arr);
                console.log("Rejection Updated on ", new Date())
            }
            
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = Submission;