const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Project
const points = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    apiId: { type: objectId, required: true },
    point: Number,
    category: String,
    createdAt: Date,
    updatedAt: Date
};
const pointSchema = new Schema(points, { versionKey: false, timestamps: true });

module.exports = {
    Point: mongoose.model("point", pointSchema)
};