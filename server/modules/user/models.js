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
    profilePics: String,
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
}
const userSchema = new Schema(user, { versionKey: false, timestamps: true })

// User Details
const userDetails = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    primarySkill: { type: String },
    secondarySkill: { type: String },
    city: { type: String, require: true },
    state: { type: String, require: true },
    country: { type: String, require: true },
    createdAt: Date,
    updatedAt: Date,
};
const userDetailsSchema = new Schema(userDetails, { versionKey: false, timestamps: true });

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
    Contacts: mongoose.model("userContact", userContactSchema)
};