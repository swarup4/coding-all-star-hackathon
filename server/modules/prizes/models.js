const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Project
const prize = {
    _id: { type: objectId, auto: true },
    hackathonId: { type: objectId, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    range: { type: Boolean, default: 0 },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const prizeSchema = new Schema(prize, { versionKey: false, timestamps: true });


// Project Image
const prizeDescription = {
    _id: { type: objectId, auto: true },
    prizeId:  { type: objectId, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
};
const prizeDescriptionSchema = new Schema(prizeDescription, { versionKey: false, timestamps: true });


module.exports = {
    Prize: mongoose.model("prize", prizeSchema),
    PrizeDescription: mongoose.model("prizeDescription", prizeDescriptionSchema)
};