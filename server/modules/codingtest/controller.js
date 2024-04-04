require('dotenv').config();

const express = require('express');
const jwt = require("jsonwebtoken");
const multer = require('multer');

var spawn = require('child_process').spawn;
var fs = require('fs');

const Models = require('./models');
const userMiddleware = require('../../middleware/user');

const router = express.Router();

// API 
router.post('/addApi', async (req, res) => {
    try {
        const model = new Models.APIs(req.body);
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
        const api = await Models.APIs.findById(id);
        if (api) {
            res.json(api);
        }
    } catch (error) {
        res.send(error);
    }
})



// API Files
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
        const id = req.params.id;
        const body = req.body;
        const code = await Models.Code.findOneAndUpdate({ _id: id }, body);
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



// API Test Files
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

router.put('/saveCode/:id', async (req, res) => {
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

module.exports = router;