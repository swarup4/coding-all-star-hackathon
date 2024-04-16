const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Hackathon
const hackathon = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    panels: [{ type: objectId, required: true }],
    theme: { type: String, required: true },
    appliedUser: [{ type: objectId, required: true }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    banner: [{ type: String, required: true }],
    status: { type: Number, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const hackathonSchema = new Schema(hackathon, { versionKey: false, timestamps: true });

// Hackathon
// const hackathonDetails = {
//     _id: { type: objectId, auto: true },
//     hackathonId: { type: objectId, required: true },
//     banner: [{ type: String, required: true }],
//     createdAt: Date,
//     updatedAt: Date
// };
// const hackathonDetailsSchema = new Schema(hackathonDetails, { versionKey: false, timestamps: true });

module.exports = {
    Hackathon: mongoose.model("hackathon", hackathonSchema)
};