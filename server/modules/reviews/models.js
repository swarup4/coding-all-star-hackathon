const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// Review
const review = {
    _id: { type: objectId, auto: true },
    apiId: { type: objectId, required: true },
    reviewerId: { type: objectId, required: true },
    codeVerification: { type: Number, default: 0 },
    comment: String,
    reply: [{
        _id: { type: objectId, auto: true },
        reviewId: { type: objectId, auto: true },
        userId: { type: objectId, required: true },
        dispute: { type: Boolean, default: 0 },
        comment: String,
        createdAt: Date,
        updatedAt: Date,
    }],
    createdAt: Date,
    updatedAt: Date   
}
const reviewSchema = new Schema(review, { versionKey: false, timestamps: true });


module.exports = {
    Review: mongoose.model("review", reviewSchema)
};