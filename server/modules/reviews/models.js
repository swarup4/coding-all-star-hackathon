const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// Review
const review = {
    _id: { type: objectId, auto: true },
    resourceName: String,
    empId: String,
    email: String,		
    manager: String,
    pLanguage: String,
    ApiEndpoint: objectId,
    status: { type: Number, default: 1 },
    codeVerification: { type: Boolean, default: 1 },
    CodeVerificationComment: String,
    createdAt: Date,
    updatedAt: Date,
    
};
const reviewSchema = new Schema(review, { versionKey: false, timestamps: true });


module.exports = {
    Review: mongoose.model("review", reviewSchema)
};