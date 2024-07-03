const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// APIs
const submission = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    hackathonId: { type: objectId, required: true },
    name: { type: String, required: true },
    apiEndPoint: { type: String, required: true },
    apiVersion: { type: String, required: true },
    documentationLink: { type: String, required: true },
    programmingLanguage: { type: String, required: true },
    code: String,
    envVariable: String,
    unitTest: String,
    videoLink: { type: String },
    requirementApproach: String,
    category: String,
    description: String,
    submitStatus: { type: Boolean, default: 0 },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
}
const submissionSchema = new Schema(submission, { versionKey: false, timestamps: true });


// APIs
const submissionKey = {
    _id: { type: objectId, auto: true },
    submitedBy: { type: objectId, required: true },
    apiId: { type: objectId, required: true },
    hackathonId: { type: objectId, required: true },
    endPointVersion: { type: String, required: true },
    apiEndPoint: { type: String, required: true },
    apiStatus: { type: Number, default: 0 },    // 0 is for Unvarified, 1 is for Approve the Code, 2 is for Reject the code
    createdAt: Date,
    updatedAt: Date
};
const submissionKeySchema = new Schema(submissionKey, { versionKey: false, timestamps: true });


module.exports = {
    UserAPIs: mongoose.model("submission", submissionSchema),
    SubmissionKey: mongoose.model("submissionKey", submissionKeySchema)
}