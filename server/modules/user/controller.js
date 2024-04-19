require('dotenv').config();

const express = require('express');
const jwt = require("jsonwebtoken");
const multer = require('multer');

const User = require('./models');
const userMiddleware = require('../../middleware/user');
// const config = require('../../helper/config');
// const email = require('../../middleware/email');
// const sendSMS = require('../../middleware/sendSMS');
// const phone = require('../../middleware/sendSMS');
// const uploadMiddleware = require('../../middleware/uploadImage');

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

// Get All User Information. This is Only for Admin User
router.get("/info/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.Auth.findById(id, { password: 0 });
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
        };

        const user = await User.Auth.findOne(obj);
        if (user == null) {
            res.status(401).json({ error: "Username & password is not Valid" });
        } else {
            const obj = { id: user._id, email: user.email };
            const token = jwt.sign(obj, process.env.SECRATE_KEY, {
                expiresIn: 1800 // expires in 30 minuit
            });

            res.json({
                id: user._id,
                email: user.email,
                name: user.name,
                profilePics: user.profilePics,
                token: token
            });
        }
    } catch (error) {
        res.send(error);
    }
});


// Create New User 
/**
 * {
        "role": "Admin",
        "username": "Swarup7",
        "password": "Swarup@123",
        "email": "swarup.saha004@hotmail.com",
        "countryCode": 91
        "phone": 9035845781
 * }
 */
router.post("/signup", async (req, res) => {
    try {
        const model = new User.Auth(req.body);
        console.log(model);
        const user = await model.save();
        const obj = { id: user._id, email: user.email };
        const token = jwt.sign(obj, process.env.SECRATE_KEY, {
            expiresIn: 1800 // expires in 30 minuit
        });

        res.send({
            id: user._id,
            email: user.email,
            name: user.name,
            token: token
        });
    } catch (error) {
        res.send(error);
    }
});

router.put("/addUsername/:id", userMiddleware.checkExestingUsername, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.Auth.findOneAndUpdate({ _id: id }, { username: req.body.username }, {
            timestamps: { createdAt: false, updatedAt: true }
        });

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

router.put("/addUserInfo/:id", userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.Auth.findOneAndUpdate({ _id: id }, req.body, {
            timestamps: { createdAt: false, updatedAt: true }
        });

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

//Change Password
router.post('/changePassword', userMiddleware.varifyToken, async (req, res) => {
    try {
        const userId = req.body.id;
        const password = req.body.password;
        const user = await User.Auth.findById(userId);

        if (user.length > 0) {
            const obj = { _id: userId };
            const user = await User.Auth.findOneAndUpdate(obj, { password: password }, {
                timestamps: { createdAt: false, updatedAt: true }
            });

            res.json({
                success: true,
                data: user
            });
        } else {
            res.status(404).send("User id not found");
        }
    } catch (error) {
        res.send(error);
    }
});


// Active Previous Deactivated User. & Deactivate Active User.
router.put("/activeDeactivateUser/:id", (req, res) => {
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


/**
 * Varify Phone
 *  */
function getUserId(req, res, next) {
    const type = req.params.type;
    const data = req.params.data;
    User.Auth.findOne({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            if (!user) {
                res.status(404).send("No User Found");
            } else {
                req.body.id = user._id;
                next();
            }
        }
    })
}


router.put("/varification/:type/:id", userMiddleware.varifyToken, (req, res) => {
    const obj = {};
    const id = req.params.id;
    const type = req.params.type;
    const securityCode = req.body.securityCode;

    if (type == "email") {
        obj.emailVerified = 1;
    } else {
        obj.phoneVerified = 1;
    }

    User.Auth.findById(id, { securityCode: 1 }, (err, code) => {
        if (err) {
            res.send(err);
        } else {
            if (code.securityCode == securityCode) {
                User.Auth.findByIdAndUpdate(id, obj, (err, data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(`Users ${type} has varified`);
                    }
                });
            } else {
                res.send(`Users ${type} has not varified. Because you have entered wrong Security Code`);
            }
        }
    });
});

/**
 * Insert User Details
 *  */
// Insert Logged in User Details
router.post("/insertUserDetails", async (req, res) => {
    try {
        const model = new User.Details(req.body);
        const user = await model.save();
        if (user) {
            res.json({
                success: true,
                message: 'User details has addded'
            });
        }
    } catch (error) {
        res.send(error);
    }
});

// Get Logged in User Details
router.get("/userDetails/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.Details.findOne({ userId: id });
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

// Update User Details
router.put("/updateUserDetails/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const obj = req.body;
        const user = await User.Details.findOneAndUpdate({ userId: id }, obj, {
            timestamps: { createdAt: false, updatedAt: true }
        });

        if (user) {
            res.json({
                success: true,
                message: "Data Updated Successfully"
            });
        }
    } catch (error) {
        res.send(error);
    }
});

// Add Social Media
router.post('/addSocialMedia/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const obj = req.body;

        const social = await User.Contacts.findOneAndUpdate({ _id: userId }, { $push: { socialMedia: obj } }, {
            new: true,
            upsert: true // Make this update into an upsert
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
router.put('/uploadProfilePics/:id', async (req, res) => {
    try {
        let id = req.params.id
        const profile = await User.Auth.findOneAndUpdate({ _id: id }, req.body, {
            timestamps: { createdAt: false, updatedAt: true }
        });
        if (profile) {
            res.json({
                success: true,
                message: 'Profile picture uploaded successfully'
            });
        }
    } catch(error) {
        res.send(error);
    }
    
});

module.exports = router;