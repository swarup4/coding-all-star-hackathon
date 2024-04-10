const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// Review
const review = {
    _id: { type: objectId, auto: true },
    apiId: { type: objectId, required: true },
    reviewerId: { type: objectId, required: true },
    status: { type: Number, default: 1 },
    codeVerification: { type: Boolean, default: 1 },
    comment: { type: String, required: true },
    reply: [{
        userId: objectId,
        comment: String,
        createdAt: Date,
        updatedAt: Date,
    }],
    createdAt: Date,
    updatedAt: Date,
    
};
const reviewSchema = new Schema(review, { versionKey: false, timestamps: true });


module.exports = {
    Review: mongoose.model("review", reviewSchema)
};