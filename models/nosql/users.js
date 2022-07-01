const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    lastname: {
      type: String
    },
    date: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    range: {
      type: Number
    },
    role: {
      type: ["user", "admin"],
      default: "user"
    },
  },
  {
    timestamps: true, //createAt, UpdateAt
    versionKey: false
  }
);

module.exports = mongoose.model("users", UserScheme)
