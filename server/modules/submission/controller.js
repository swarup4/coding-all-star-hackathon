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


// User API 
router.post('/addApi', async (req, res) => {
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

router.post('/addApiFile', async (req, res) => {
    try {
        const model = new Models.Code(req.body);
        const file = await model.save();
        if (file) {
            res.json(file);
        };
    } catch (error) {
        res.send(error);
    }
})

router.get('/getApiFileList/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const files = await Models.Code.find({ apiId: id })
        if (files) {
            res.json(files);
        }
    } catch (error) {
        res.send(error);
    }
})

router.get('/getCode/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const files = await Models.Code.findById(id);
        if (files) {
            res.json(files.code)
        }
    } catch (error) {
        res.send(error);
    }
})

router.put('/saveCode/:id', async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const code = await Models.Code.findOneAndUpdate({ _id: id }, body)
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

router.get('/getTestFileList/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const files = await Models.UnitTest.find({ apiId: id })
        if (files) {
            res.json(files);
        }
    } catch (error) {
        res.send(error);
    }
})

router.post('/addTestFile', async (req, res) => {
    try {
        const model = new Models.UnitTest(req.body);
        const cate = await model.save();
        console.log(cate);
        if (cate) {
            res.json(cate);
        };
    } catch (error) {
        res.send(error);
    }
})

router.get('/getTestFileList/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const files = await Models.UnitTest.findById(id);
        if (files) {
            res.json(files.code)
        }
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
