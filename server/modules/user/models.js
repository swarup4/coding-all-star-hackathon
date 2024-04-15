const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// User
const user = {
    _id: { type: objectId, auto: true },
    name: { type: String, require: true },
    organization: { type: String, require: true },
    role: String,
    empId: Number,
    email: { type: String, require: true },
    password: { type: String, require: true },
    manager: { type: objectId },
    reporty: [{ type: objectId }],
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
}
const userSchema = new Schema(user, { versionKey: false, timestamps: true })


// User Profile Pics
const userProfilePics = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    profilePics: String,
    createdAt: Date,
    updatedAt: Date
}
const userProfilePicsSchema = new Schema(userProfilePics, { versionKey: false, timestamps: true })


module.exports = {
    Auth: mongoose.model("user", userSchema),
    ProfilePics: mongoose.model("userProfilePics", userProfilePicsSchema)
};