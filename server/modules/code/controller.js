require("dotenv").config();

const express = require("express");

const Models = require("./models");
const UserApiModels = require("../userApi/models");

const router = express.Router();

function checkApiExist(req, res, next) {
    const endPoint = req.body.apiEndPoint;
    const version = req.body.version;

    Models.APIs.find({
        apiEndPoint: endPoint, version: version
    }).then(api => {
        if (api.length > 0) {
            console.log("More than 1 ===>>> ", api);
            res.json({
                status: 200,
                data: "Someone already Submit the API"
            })
        } else {
            console.log("Empty Data ===>>> ", api);
            next()
        }
    }).catch(err => {
        console.log("Error ===>>> ", err);
        res.send(err);
    });
}

function getApiInfo(req, res, next) {
    const endPoint = req.body.apiEndPoint;
    const version = req.body.version;
    const userId = req.body.userId;

    UserApiModels.UserAPIs.findOne({
        apiEndPoint: endPoint, version: version, userId: userId
    }).then(api => {
        req.apiData = api;
        next()
    }).catch(err => {
        res.send(err);
    });
}

// API
router.post("/submitApi", checkApiExist, getApiInfo, async (req, res) => {
    try {
        let obj = {
            submitedBy: req.apiData.userId,
            apiId: req.apiData._id,
            version: req.apiData.version,
            apiEndPoint: req.apiData.apiEndPoint,
        }
        const model = new Models.APIs(obj);
        const api = await model.save();
        if (api) {
            res.json(api);
        }
    } catch (error) {
        res.send(error);
    }
});


router.put('/getSubmissionDetails/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Models.Hackathon.findOneAndUpdate({ _id: id }, body);
        if (data) {
            res.json({
                success: true,
                data: data
            });
        };
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
