require('dotenv').config();
const AWS = require('aws-sdk');

const s3Client = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION
});

const uploadParams = {
    Bucket: process.env.BUCKET,
    Key: '', // pass key
    Body: null, // pass file body
};

const hackathon = {
    uploadBanner: (req, res, next) => {
        const hackathonId = req.params.id;
        const client = s3Client;
        const params = uploadParams;

        const extenssionArr = req.file.originalname.split('.');
        const extenssion = extenssionArr[extenssionArr.length - 1];
        const fileName = hackathonId + '.' + extenssion;

        params.Key = fileName;
        params.Body = req.file.buffer;

        client.upload(params, (err, data) => {
            if (err) {
                res.status(500).json({ error: "Error -> " + err });
            } else {
                req.fileName = fileName
                next();
            }
        });
    }
};

module.exports = hackathon;