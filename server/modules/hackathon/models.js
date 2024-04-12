const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Hackathon
const hackathon = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    team: { type: objectId, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    appliedUser: { type: objectId, required: true },
    status: { type: Number, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const hackathonSchema = new Schema(hackathon, { versionKey: false, timestamps: true });


module.exports = {
    Hackathon: mongoose.model("hackathon", hackathonSchema)
};