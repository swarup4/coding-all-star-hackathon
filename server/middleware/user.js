require('dotenv').config();
const jwt = require("jsonwebtoken");
const AWS = require('aws-sdk');
const Models = require('../modules/user/models');


const s3Client = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION
});

const uploadParams = {
    Bucket: process.env.USER_BUCKET,
    Key: '', // pass key
    Body: null, // pass file body
};

let User = {
    getUserInfo: (req, res, next) => {
        const id = req.params.id;
        const type = req.params.type;
        let obj = { "fname": 1 };
        if (type == "email") {
            obj.email = 1;
        } else {
            obj.phone = 1;
        }

        Models.Auth.findById(id, obj, (err, data) => {
            if (err) {
                res.send(err.message);
            } else {
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
            
            let data = await Models.Auth.findOne({
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
        let token = req.headers.authorization;
        if (!token) {
            res.status(401).send({ auth: false, message: 'No token provided.' })
        } else {
            jwt.verify(token, process.env.SECRATE_KEY, (err, decoded) => {
                if (err) {
                    res.status(401).json({ auth: false, message: 'Failed to authenticate token.', error: err });
                } else {
                    next();
                }
            });
        }
    },

    uploadImage: (req, res, next) => {
        const userId = req.params.id;
        const client = s3Client;
        const params = uploadParams;

        const extenssionArr = req.file.originalname.split('.');
        const extenssion = extenssionArr[extenssionArr.length - 1];
        const fileName = userId + '.' + extenssion;
        
        params.Key = fileName;
        params.Body = req.file.buffer;

        client.upload(params, (err, data) => {
        	if (err) {
        		res.status(500).json({error:"Error -> " + err});
        	} else {
                req.fileName = fileName
                next();
            }
        });
    }
};

module.exports = User;