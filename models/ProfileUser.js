const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.objectId,
    ref: "user",
    unique: true,
    required: true,
  },
  isProfileSet: {
    type: Boolean,
    default: false,
  },
  streetAddress1: {
    type: String,
    required: true,
  },
  streetAddress2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  optInText: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
  phone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ProfileUser", ProfileSchema);
