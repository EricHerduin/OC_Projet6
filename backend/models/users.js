// import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("users", userSchema);
