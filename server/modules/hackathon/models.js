const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Hackathon
const hackathon = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId },
    panels: [{ type: objectId }],
    appliedUser: [{ type: objectId }],
    theme: { type: String, default: ''},
    name: String,
    heading: String,
    description: String,
    banner: String,
    status: { type: Boolean, default: 1 },
    expireAt: Date,
    createdAt: Date,
    updatedAt: Date
};
const hackathonSchema = new Schema(hackathon, { versionKey: false, timestamps: true });


module.exports = {
    Hackathon: mongoose.model("hackathon", hackathonSchema)
};