const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// APIs
const apis = {
    _id: { type: objectId, auto: true },
    version: String,
    documentationLink: String,
    code: String,
    unitTest: String,
    envVariables: String,
    videoLink: String,
    postmanExport: String,
    requirementApproach: String,
    Category: String,
    description: String,
    validation: String,
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
};
const apisSchema = new Schema(apis, { versionKey: false, timestamps: true });

module.exports = {
    APIs: mongoose.model("api", apisSchema)
};