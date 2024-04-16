const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// User
const user = {
    _id: { type: objectId, auto: true },
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    role: { type: String, require: true },
    empId: { type: Number, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    manager: { type: objectId },
    // reporty: [{ type: objectId }],
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
};
const userSchema = new Schema(user, { versionKey: false, timestamps: true });

// User Details
const userDetails = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    primarySkill: [{ type: String }],
    secondarySkill: [{ type: String }],
    City: { type: Number, require: true },
    State: { type: String, require: true },
    Country: { type: String, require: true },
    createdAt: Date,
    updatedAt: Date,
};
const userDetailsSchema = new Schema(userDetails, { versionKey: false, timestamps: true });

// User Profile Pics
const userProfilePics = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    profilePics: String,
    createdAt: Date,
    updatedAt: Date
};
const userProfilePicsSchema = new Schema(userProfilePics, { versionKey: false, timestamps: true });

// User Contact
const userContact = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    socialMedia: [{
        name: String,
        url: String,
    }],
    createdAt: Date,
    updatedAt: Date
};
const userContactSchema = new Schema(userContact, { versionKey: false, timestamps: true });


module.exports = {
    Auth: mongoose.model("user", userSchema),
    Details: mongoose.model("userDetails", userDetailsSchema),
    ProfilePics: mongoose.model("userProfilePics", userProfilePicsSchema),
    Contacts: mongoose.model("userContact", userContactSchema)
};