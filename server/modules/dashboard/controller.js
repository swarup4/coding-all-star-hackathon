const express = require('express');
const { SubmissionKey } = require('../submission/models');

const router = express.Router();

router.get('/getAllApiListDetails', async (req, res) => {
    try {
        const data = await SubmissionKey.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "submitedBy",
                    foreignField: "_id",
                    as: "submitedBy"
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
                    localField: "apiId",
                    foreignField: "apiId",
                    as: "review"
                }
            }, {
                $unwind: "$review"
            }, {
                $lookup: {
                    from: "users",
                    localField: "review.reviewerId",
                    foreignField: "_id",
                    as: "review.user"
                }
            }, {
                $unwind: "$submitedBy"
            }, {
                $unwind: "$api"
            }, {
                $unwind: "$review.user"
            }, {
                $addFields: {
                    review: {
                        name: "$review.user.name",
                        profilePics: "$review.user.profilePics",
                        email: "$review.user.email"
                    }
                }
            }, {
                $unset: [
                    "review.user",
                    "review.apiId",
                    "review.createdAt",
                    "review.updatedAt"
                ]
            }, {
                $group: {
                    _id: {
                        _id: "$_id",
                        apiStatus: "$apiStatus",
                        submitedBy: "$submitedBy",
                        api: "$api"
                    },
                    review: {
                        $push: "$review"
                    }
                }
            }, {
                $project: {
                    _id: 0,
                    userId: "$_id.submitedBy._id",
                    name: "$_id.submitedBy.name",
                    empId: "$_id.submitedBy.empId",
                    email: "$_id.submitedBy.email",
                    apiName: "$_id.api.name",
                    apiEndPoint: "$_id.api.apiEndPoint",
                    apiVersion: "$_id.api.apiVersion",
                    apiStatus: "$_id.apiStatus",
                    documentationLink: "$_id.api.documentationLink",
                    programmingLanguage: "$_id.api.programmingLanguage",
                    description: "$_id.api.description",
                    code: "$_id.api.code",
                    envVariable: "$_id.api.envVariable",
                    unitTest: "$_id.api.unitTest",
                    videoLink: "$_id.api.videoLink",
                    review: 1
                }
            }
        ]);
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;