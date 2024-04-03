require('dotenv').config();

const express = require('express');
const jwt = require("jsonwebtoken");
const multer = require('multer');

var spawn = require('child_process').spawn;
var fs = require('fs');

const Models = require('./models');
const userMiddleware = require('../../middleware/user');

const router = express.Router();


route.get('/getApiFileList/:id', async(req, res) => {
	try {
        const id = req.params.id;
        const files = await Models.Code.findById(id);
        if (files) {
            res.json(files);
        }
    } catch (error) {
        res.send(error);
    }
})

router.post('/addApiFile', async (req, res) => {
    try {
        const model = new Models.Code(req.body);
        const cate = await model.save();
        console.log(cate);
        if (cate) {
            res.json(cate);
        };
    } catch (error) {
        res.send(error);
    }
})

route.get('/getCode/:id', async(req, res) => {
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


route.get('/getTestFileList/:id', async(req, res) => {
	try {
        const id = req.params.id;
        const files = await Models.UnitTest.findById(id);
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


route.get('/getTestFileList/:id', async(req, res) => {
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

module.exports = router;