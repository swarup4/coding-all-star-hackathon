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
router.get("/info/:id", userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        let arr = [
            User.Auth.findById(id, { password: 0, createdAt: 0, updatedAt: 0 }),
            User.Details.findOne({ userId: id }, { _id:0, userId:0, createdAt: 0, updatedAt: 0 }),
            User.Contacts.findOne({ userId: id }, { _id:0, userId:0, createdAt: 0, updatedAt: 0 })
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
                expiresIn: 3600 // expires in 60 minuit
            });

            res.json({
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
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
router.post("/signup", userMiddleware.checkExestingUser, async (req, res) => {
    try {
        const model = new User.Auth(req.body);
        const user = await model.save();
        const obj = { id: user._id, email: user.email };
        const token = jwt.sign(obj, process.env.SECRATE_KEY, {
            expiresIn: 3600 // expires in 60 minuit
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

router.get('/userList', async (req, res) => {
    try {
        let userList = await User.Auth.find({}, { name: 1 })
        res.json(userList);
    } catch (error) {

    }
})


router.put('/updateUserDetails/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        let userId = req.params.id;
        let body = req.body;

        let authObj = {
            role: body.role,
            empId: Number(body.empId),
            manager: body.manager,
        }

        if (Object.keys(body.profilePics).length > 0) {
            authObj.profilePics = body.profilePics?.file?.name
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
            upsert: true
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
router.put('/changePassword/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.Auth.findOne({_id: userId, password: req.body.oldpassword });
        if (user) {
            const user = await User.Auth.findOneAndUpdate({ _id: userId }, { password: req.body.password }, {
                returnOriginal: false
            });

            const obj = { id: user._id, email: user.email };
            const token = jwt.sign(obj, process.env.SECRATE_KEY, {
                expiresIn: 3600 // expires in 60 minuit
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
        const obj = req.body;

        const social = await User.Contacts.findOneAndUpdate({ userId: userId }, { $push: { socialMedia: obj } }, {
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
router.put('/uploadProfilePics/:id', userMiddleware.varifyToken, async (req, res) => {
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
    } catch (error) {
        res.send(error);
    }
});


router.put('/uploadExcel', userMiddleware.varifyToken, async (req, res) => {
    try {
        let obj = {
            name: req.body.name,
            organization: req.body.organization,
            role: req.body.role,
            empId: req.body.empId,
            email: req.body.email,
            password: req.body.password
        }

        const model = new User.Auth(obj);
        const user = await model.save();
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

module.exports = router;