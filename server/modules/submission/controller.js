require("dotenv").config();

const express = require("express");

const Models = require("./models");

const router = express.Router();

function checkApiExist(req, res, next) {
    const endPoint = req.body.apiEndPoint;
    const version = req.body.apiVersion;

    Models.APIs.find({
        apiEndPoint: endPoint, apiVersion: version
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

function updateApiStatus(req, res, next) {
    const id = req.params.id;

    Models.UserAPIs.findOneAndUpdate({ _id: id }, { status: 1 }).then(res => {
        next()
    }).catch(err => {
        res.send(err);
    });
}

function getApiInfo(req, res, next) {
    const id = req.params.id;

    Models.UserAPIs.findOne({
        _id: id
    }).then(api => {
        req.apiData = api;
        next()
    }).catch(err => {
        res.send(err);
    });
}

function updateApiSubmission(req, res) {
    const id = req.params.id
    const body = req.body

    Models.SubmissionKey.findOneAndUpdate({ _id: id }, body).then(res => {
        res.json({
            status: 200,
            message: "success"
        })
    }).catch(err => {
        res.send(err);
    });
}

// User API 
router.post('/addApi', checkApiExist, async (req, res) => {
    try {
        const model = new Models.UserAPIs(req.body);
        const api = await model.save();
        if (api) {
            res.json(api);
        };
    } catch (error) {
        res.send(error);
    }
})

router.get('/getApiList/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const api = await Models.UserAPIs.find({ userId: id })
        if (api) {
            res.json(api);
        }
    } catch (error) {
        res.send(error);
    }
})

router.put('/saveCode/:id', async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const code = await Models.UserAPIs.findOneAndUpdate({ _id: id }, body)
        if (code) {
            res.json({
                success: true,
                data: code
            });
        };
    } catch (error) {
        res.send(error);
    }
})

router.put('/saveUnitTestCode/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const code = await Models.UnitTest.findOneAndUpdate({ _id: id }, body);
        if (code) {
            res.json({
                success: true,
                data: code
            });
        };
    } catch (error) {
        res.send(error);
    }
})




// API Submission
router.put("/submitApi/:id", updateApiStatus, getApiInfo, async (req, res) => {
    try {
        const id = req.params.id;
        const version = req.body.version;

        let obj = {
            submitedBy: req.apiData.userId,
            apiId: id,
            hackathonId: req.apiData.hackathonId,
            endPointVersion: req.apiData.version,
            version: version,
            apiEndPoint: req.apiData.apiEndPoint,
        }
        const model = new Models.SubmissionKey(obj);
        const api = await model.save();
        if (api) {
            res.json(api);
        }
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateSubmissionStatus/:id', updateApiSubmission);

module.exports = router;
