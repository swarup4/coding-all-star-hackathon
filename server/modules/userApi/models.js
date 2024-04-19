const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// APIs
const apis = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    hackathonId: { type: objectId, required: true },
    name: { type: String, required: true },
    apiEndPoint: { type: String, required: true },
    version: { type: String, required: true },
    documentationLink: { type: String, required: true },
    postmanExport: String,
    videoLink: { type: String, required: true },
    requirementApproach: String,
    category: String,
    description: String,
    validation: String,
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
};
const apisSchema = new Schema(apis, { versionKey: false, timestamps: true });


// Api Files
const apiFiles = {
    _id: { type: objectId, auto: true },
    apiId: { type: objectId, required: true },
    fileName: { type: String, required: true },
    code: { type: String },
    createdAt: Date,
    updatedAt: Date
};
const apiFilesSchema = new Schema(apiFiles, { versionKey: false, timestamps: true });


// Api Files
const envFiles = {
    _id: { type: objectId, auto: true },
    apiId: { type: objectId, required: true },
    fileName: { type: String, required: true },
    code: { type: String },
    createdAt: Date,
    updatedAt: Date
};
const envFilesSchema = new Schema(envFiles, { versionKey: false, timestamps: true });


// Api Unit Test
const apiUnitTestFiles = {
    _id: { type: objectId, auto: true },
    apiId: { type: objectId, required: true },
    fileName: { type: String, required: true },
    code: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
};
const apiUnitTestFilesSchema = new Schema(apiUnitTestFiles, { versionKey: false, timestamps: true });

module.exports = {
    UserAPIs: mongoose.model("userApi", apisSchema),
    Code: mongoose.model("apiFiles", apiFilesSchema),
    EnvFiles: mongoose.model("envFiles", envFilesSchema),
    UnitTest: mongoose.model("apiUnitTest", apiUnitTestFilesSchema),
};