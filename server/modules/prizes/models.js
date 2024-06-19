const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const prize = {
    _id: { type: objectId, auto: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const prizeSchema = new Schema(prize, { versionKey: false, timestamps: true });

module.exports = {
    Prize: mongoose.model("prize", prizeSchema)
};