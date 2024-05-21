const express = require('express');
const Model = require('./models');
const userMiddleware = require('../../middleware/user');

const router = express.Router();

// LeaderBoard
router.get('/getLeaderboard', userMiddleware.varifyToken, async (req, res) => {
    try {
        const data = await Model.Point.aggregate([
            {
                $group: {
                    _id: "$userId",
                    totalPoint: {
                        $sum: "$point"
                    }
                }
            }, {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "user"
                }
            }, {
                $unwind: "$user"
            }, {
                $project: {
                    name: "$user.name",
                    email: "$user.email",
                    profilePics: "$user.profilePics",
                    point: "$totalPoint"
                }
            }, {
                $setWindowFields: {
                    partitionBy: "$_id",
                    sortBy: {
                        point: -1
                    },
                    output: {
                        rank: {
                            $denseRank: {}
                        }
                    }
                }
            }
        ])
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;