const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const email = {
    _id: { type: objectId, auto: true },
    template: { type: String, required: true },
    status: { type: Boolean, default: 1 },
    createdDate: Date
}

const emailSchema = new Schema(email, { versionKey: false });

module.exports = mongoose.model("email", emailSchema);