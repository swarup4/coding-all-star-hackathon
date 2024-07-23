const moment = require('moment');
const ObjectId = require("mongoose").Types.ObjectId;

const { Hackathon } = require('../modules/hackathon/models');
const { Auth } = require('../modules/user/models');
const { SubmissionKey } = require('../modules/submission/models');

const Dashboard = {
    managersPaticipateEmployee: async (req, res) => {
        try {
            const data = await Hackathon.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "appliedUser",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                {
                    $unwind: "$user"
                },
                {
                    $match: {
                        "user.canParticipate": true
                    }
                },
                {
                    $project: {
                        _id: "$user._id",
                        name: "$user.name",
                        empId: "$user.empId",
                        email: "$user.email",
                        role: "$user.role",
                        manager: "$user.manager"
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "manager",
                        foreignField: "_id",
                        as: "manager"
                    }
                },
                {
                    $unwind: {
                        path: "$manager",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $group: {
                        _id: "$manager._id",
                        manager: {
                            $first: "$manager"
                        },
                        employees: {
                            $push: "$$ROOT"
                        }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        name: "$manager.name",
                        empId: "$manager.empId",
                        role: "$manager.role",
                        email: "$manager.email",
                        employees: {
                            _id: 1,
                            name: 1,
                            empId: 1,
                            role: 1,
                            email: 1
                        }
                    }
                }
            ])


            if (data) {
                res.json(data);
            }
        } catch (error) {
            res.json(error)
        }
    },
    managersUnparticipateEmployee: async (req, res, next) => {
        try {
            const hackathonId = req.params.id;
            const userList = await Auth.find({ canParticipate: true }, { _id: 1 })
            let userId = userList.map(x => x._id)

            const data = await Hackathon.findOne({ _id: hackathonId })
            let appliedUser = data.appliedUser;
            let unParticipate = userId.filter(x => !appliedUser.includes(x))

            const userData = await Auth.aggregate([
                {
                    $match: {
                        _id: { $in: unParticipate }
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "manager",
                        foreignField: "_id",
                        as: "manager"
                    }
                },
                {
                    $unwind: {
                        path: "$manager",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $group: {
                        _id: "$manager._id",
                        manager: {
                            $first: "$manager"
                        },
                        employees: {
                            $push: {
                                _id: "$_id",
                                name: "$name",
                                role: "$role",
                                email: "$email",
                                empId: "$empId"
                            }
                        }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        name: "$manager.name",
                        empId: "$manager.empId",
                        role: "$manager.role",
                        email: "$manager.email",
                        employees: {
                            _id: 1,
                            name: 1,
                            empId: 1,
                            role: 1,
                            email: 1
                        }
                    }
                }
            ])
            console.log(userData.length);
            res.json(userData)
        } catch (error) {
            res.json(error)
        }
    },

    paticipateEmployee: async (req, res) => {
        try {
            const data = await Hackathon.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "appliedUser",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                {
                    $unwind: "$user"
                },
                {
                    $match: {
                        "user.canParticipate": true
                    }
                },
                {
                    $project: {
                        _id: "$user._id",
                        name: "$user.name",
                        empId: "$user.empId",
                        email: "$user.email",
                        role: "$user.role"
                    }
                }
            ])


            if (data) {
                res.json(data);
            }
        } catch (error) {
            res.json(error)
        }
    },
    unparticipateEmployee: async (req, res, next) => {
        try {
            const hackathonId = req.params.id;
            const userList = await Auth.find({ canParticipate: true }, { _id: 1 })
            let userId = userList.map(x => x._id)

            const data = await Hackathon.findOne({ _id: hackathonId })
            let appliedUser = data.appliedUser;
            let unParticipate = userId.filter(x => !appliedUser.includes(x))

            const userData = await Auth.find({ _id: { $in: unParticipate } }, 
                { _id: 1, name: 1, role: 1, email: 1, empId: 1 })
            res.json(userData)
        } catch (error) {
            res.json(error)
        }
    },

    submitedUser: async (req, res, next) => {
        const data = await SubmissionKey.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "submitedBy",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: "$user"
            },
            {
                $project: {
                    _id: 1,
                    name: "$user.name",
                    empId: "$user.empId",
                    role: "$user.role",
                    email: "$user.email"
                }
            }
        ])

        if (data) {
            res.json(data);
        }
    }
};

module.exports = Dashboard;