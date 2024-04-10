require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");

var spawn = require("child_process").spawn;
var fs = require("fs");

const Models = require("./models");
const UserApiModels = require("../userApi/models");
const userMiddleware = require("../../middleware/user");

const router = express.Router();

async function checkApiExist(req, res, next) {
  try {
    const endPoint = req.body.apiEndPoint;
    const version = req.body.version;
    // { $or: [ { apiEndPoint: endPoint }, { version: version } ] }
    const api = await UserApiModels.UserAPIs.find({
      $or: [
        {
          $and: [{ apiEndPoint: { $ne: true } }, { condition2: { $ne: true } }],
        },
        { condition1: { $ne: true } }, // At least one condition should not be true
        { condition2: { $ne: true } }, // At least one condition should not be true
      ],
    });
    if (api) {
    }
  } catch (error) {}
}

// API
router.post("/submitApi", async (req, res) => {
  try {
    const model = new Models.APIs(req.body);
    const api = await model.save();
    if (api) {
      res.json(api);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
