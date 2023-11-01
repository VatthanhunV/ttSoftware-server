const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    telephone: { type: String, require: true },
    email: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("users", UserSchema);
