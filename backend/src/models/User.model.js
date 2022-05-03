const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthday: { type: String },
    role: { type: String, default: "member" },
    phone: { type: String },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
