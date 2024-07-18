require('dotenv').config();

const express = require('express');
const reader = require('xlsx')
const jwt = require("jsonwebtoken");
const multer = require('multer');
const ObjectId = require("mongoose").Types.ObjectId;
const User = require('./models');
const userMiddleware = require('../../middleware/user');
const {getEmailTemplate, sendEmail} = require('../../middleware/email')

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

const expiresIn = 3600

// Get All User Information. This is Only for Admin User
router.get("/info/:id", userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        let arr = [
            User.Auth.findById(id, { password: 0, createdAt: 0, updatedAt: 0 }),
            User.Details.findOne({ userId: id }, { _id: 0, userId: 0, createdAt: 0, updatedAt: 0 }),
            User.Contacts.findOne({ userId: id }, { _id: 0, userId: 0, createdAt: 0, updatedAt: 0 })
        ]
        let userData = await Promise.allSettled(arr);

        let obj = {}

        obj.user = userData[0]?.status == 'fulfilled' ? userData[0]?.value : {}
        obj.userDetails = userData[1]?.status == 'fulfilled' ? userData[1]?.value : {}
        obj.userContact = userData[2]?.status == 'fulfilled' ? userData[2]?.value : {}

        if (obj) {
            res.json({
                success: true,
                data: obj
            });
        }
    } catch (error) {
        res.send(error);
    }
});


// Get Hirerchy List
router.get("/hierarchicalData", async (req, res) => {
    try {
        const user = await User.Auth.aggregate([
            {
                $graphLookup: {
                    from: "users",
                    startWith: "$_id",
                    connectFromField: "_id",
                    connectToField: "manager",
                    maxDepth: 5,
                    depthField: "depth",
                    as: "hierarchy"
                }
            },
            {
                $addFields: {
                    hierarchy: {
                        $filter: {
                            input: "$hierarchy",
                            cond: { $ne: ["$$this", null] } // Remove any null values from the hierarchy array
                        }
                    }
                }
            }
        ]);
        if (user) {
            res.json({
                success: true,
                data: user
            });
        }
    } catch (error) {
        res.send(error);
    }
});

/**
{
    "username": "Swarup7",
    "password": "Swarup@123"
}
 */
router.post("/login", async (req, res) => {
    try {
        const obj = {
            organization: req.body.organization,
            email: req.body.email,
            password: req.body.password,
            status: true
        }

        const user = await User.Auth.findOne(obj);
        if (user == null) {
            res.status(401).send("Username & password is not Valid")
        } else {
            const obj = { id: user._id, email: user.email };
            const token = jwt.sign(obj, process.env.SECRATE_KEY, {
                expiresIn: expiresIn
            });

            res.json({
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                isAdmin: user.isAdmin,
                manager: user.manager,
                profilePics: user.profilePics,
                canParticipate: user.canParticipate,
                token: token
            });
        }
    } catch (error) {
        res.send(error);
    }
});


router.post("/signup", userMiddleware.checkExestingUser, async (req, res) => {
    try {
        const model = new User.Auth(req.body);
        const user = await model.save();
        const obj = { id: user._id, email: user.email };
        const token = jwt.sign(obj, process.env.SECRATE_KEY, {
            expiresIn: expiresIn
        });

        res.send({
            id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
            token: token
        });
    } catch (error) {
        res.send(error);
    }
});

router.get('/userList/:user', userMiddleware.varifyToken, async (req, res) => {
    try {
        let user = req.params.user;
        let userList;

        if (user == 'manager'){
            userList = await User.Auth.find({ canParticipate: false }, { name: 1, email: 1 })
        } else if (user == 'panel'){
            userList = await User.Auth.find({$or: [{ canParticipate: false }, { isAdmin: true }]}, { name: 1, email: 1 })
        } else {
            userList = await User.Auth.find({ isAdmin: false }, { name: 1, email: 1, password: 1 })
        }

        res.json(userList);
    } catch (error) {
        res.send(error);
    }
})


router.put('/updateUserDetails/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        let userId = req.params.id;
        let body = req.body;

        let authObj = {
            role: body.role,
            empId: Number(body.empId)
        }

        if (body?.manager != '') {
            authObj.manager = body?.manager
        }

        const auth = await User.Auth.findOneAndUpdate({ _id: userId }, authObj, {
            returnOriginal: false
        })

        let detailsObj = {
            userId: userId,
            primarySkill: body.primarySkill,
            secondarySkill: body.secondarySkill,
            city: body.city,
            state: body.state,
            country: body.country
        }

        const details = await User.Details.findOneAndUpdate({ userId: userId }, detailsObj, {
            new: true,
            upsert: true,
            returnOriginal: false
        })

        if (details) {
            res.json({
                success: true,
                data: auth
            });
        }
    } catch (error) {
        res.json(error)
    }
})


//Change Password
router.put('/changePassword/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.Auth.findOne({ _id: userId, password: req.body.oldpassword });
        if (user) {
            const user = await User.Auth.findOneAndUpdate({ _id: userId }, { password: req.body.password }, {
                returnOriginal: false
            });

            const obj = { id: user._id, email: user.email };
            const token = jwt.sign(obj, process.env.SECRATE_KEY, {
                expiresIn: expiresIn
            });

            res.json({
                id: user._id,
                email: user.email,
                name: user.name,
                token: token
            });
        } else {
            res.status(404).send("Old password is not correct");
        }
    } catch (error) {
        res.send(error);
    }
});


// Active Previous Deactivated User. & Deactivate Active User.
router.put("/activeDeactivateUser/:id", userMiddleware.varifyToken, (req, res) => {
    const id = req.params.id;
    const status = req.body;
    User.Auth.findById(id, (err, user) => {
        if (err) {
            res.json({
                error: err,
                message: "Id is not correct"
            });
        } else {
            if (user == null) {
                res.status(404).send("User id not found");
            } else {
                User.Auth.findOneAndUpdate({ _id: id }, status, {
                    timestamps: { createdAt: false, updatedAt: true }
                }, (err, data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        if (req.body.status == false) {
                            res.status(200).json({
                                status: 'succes',
                                data: "User is Deactivated",
                            });
                        }
                        res.status(200).json({
                            status: 'succes',
                            data: "User is Activated",
                        });
                    }
                });
            }
        }
    });
});


// Add Social Media
router.put('/addSocialMedia/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        const social = await User.Contacts.findOneAndUpdate({ userId: userId }, req.body, {
            new: true,
            upsert: true
        });

        if (social) {
            res.json({
                success: true,
                message: 'Users Social Media account has insert'
            });
        }
    } catch (error) {
        res.send(error);
    }
});


// router.post('/uploadProfilePics/:id', userMiddleware.varifyToken, upload.single("profile"), uploadMiddleware.uploadImage, (req, res) => {
router.put('/uploadProfilePics/:id', userMiddleware.varifyToken, upload.single("profile"), userMiddleware.uploadImage, async (req, res) => {
    try {
        let id = req.params.id;
        const profile = await User.Auth.findOneAndUpdate(
            { _id: id },
            { profilePics: req.fileName },
            { returnOriginal: false }
        );

        if (profile) {
            res.json({
                success: true,
                data: req.fileName,
                message: 'Profile picture uploaded successfully'
            });
        }
    } catch (error) {
        res.send(error);
    }
});

function insertData(data) {
    return new Promise((resolve, reject) => {
        User.Auth.findOne({ email: data.manager }, { _id: 1 }).then(manager => {
            let obj = {
                name: data.name,
                organization: data.organization,
                role: data.role,
                empId: data.empId,
                email: data.email,
                password: 'Welcome@123',
                canParticipate: !data.isManager
            }
            if (manager) {
                obj.manager = manager._id
            }

            const userModel = new User.Auth(obj)

            userModel.save().then(user => {
                let details = {
                    userId: user._id,
                    primarySkill: data.primarySkill,
                    secondarySkill: data.secondarySkill,
                    city: data.city,
                    state: data.state,
                    country: data.country,
                }

                const userDetailsmodel = new User.Details(details);
                userDetailsmodel.save().then(userDetails => {
                    resolve(user)
                }).catch(err => {
                    reject(err)
                })
            }).catch(err => {
                reject(err);
            })
        }).catch(err => {
            reject(err);
        })
    })
}


router.post('/uploadExcel', userMiddleware.varifyToken, upload.single("userFile"), async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const file = reader.read(req.file.buffer)
        let data = []

        const sheets = file.SheetNames;
        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]]
            )
            temp.forEach((resp) => {
                data.push(resp)
            })
        }

        let arr = []
        for (let i of data) {
            arr.push(insertData(i))
        }
        let userData = await Promise.allSettled(arr);

        res.json(userData);

    } catch (error) {
        res.send(error);
    }
});


router.post('/sendEmail', userMiddleware.varifyToken, async (req, res) => {
    let body = req.body;
    let arr = [];
    let template = await getEmailTemplate();

    for (const i of body.user) {
        arr.push(sendEmail(i, body.hackathon, template));
    }

    Promise.allSettled(arr).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;