const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Hackathon
const hackathon = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId },
    panels: [{ type: objectId }],
    theme: { type: String },
    appliedUser: [{ type: objectId }],
    name: { type: String },
    description: { type: String },
    banner: [{ type: String }],
    status: { type: Number, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const hackathonSchema = new Schema(hackathon, { versionKey: false, timestamps: true });


module.exports = {
    Hackathon: mongoose.model("hackathon", hackathonSchema)
};