require('dotenv').config();
const jwt = require("jsonwebtoken");

// const config = require('../helper/config');
const User = require('../modules/user/models');
// const Admin = require('../modules/admin/models');

let loginObj = {
    getUserInfo: (req, res, next) => {
        const id = req.params.id;
        const type = req.params.type;
        let obj = { "fname": 1 };
        if (type == "email") {
            obj.email = 1;
        } else {
            obj.phone = 1;
        }

        User.Auth.findById(id, obj, (err, data) => {
            if (err) {
                res.send(err.message);
            } else {
                console.log(data);
                req.data = data;
                next();
            }
        })
    },

    // Check Email for User is Exist or Not. & Also Check User Status.
    // Params Or Object : Username
    checkExestingUser: async (req, res, next) => {
        try {
            let email = req.body.email;
            
            let data = await User.Auth.findOne({
                email: email
            })
            if (data) {
                res.status(409).send("Email is already Exist.")
            } else {
                next()
            }
        } catch (err) {
            res.send(err.message);
        }
    },
    
    varifyToken: (req, res, next) => {
        // var token = req.headers['x-access-token'];
        let token = req.headers.authorization;
        console.log(token)
        if (!token) {
            res.status(401).send({ auth: false, message: 'No token provided.' })
        } else {
            jwt.verify(token, process.env.SECRATE_KEY, (err, decoded) => {
                if (err) {
                    res.status(500).json({ auth: false, message: 'Failed to authenticate token.', error: err });
                } else {
                    next();
                }
            });
        }
    }
};

module.exports = loginObj;