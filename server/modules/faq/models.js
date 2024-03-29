const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// Review
const faq = {
    _id: { type: objectId, auto: true },
    question: String,
    answer: String,
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 },
};
const faqSchema = new Schema(faq, { versionKey: false, timestamps: true });


module.exports = {
    Faq: mongoose.model("faq", faqSchema)
};