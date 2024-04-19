const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// APIs
const apis = {
    _id: { type: objectId, auto: true },
    submitedBy: { type: objectId, required: true },
    apiId: { type: objectId, required: true },
    hackathonId: { type: objectId, required: true },
    version: { type: String, required: true },
    apiEndPoint: { type: String, required: true },
    apiStatus: { type: Number, default: 0 },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const apisSchema = new Schema(apis, { versionKey: false, timestamps: true });


module.exports = {
    APIs: mongoose.model("api", apisSchema)
};