const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');

const ElementScheme = new mongoose.Schema(
  {
    title: {
      type: String
    },
    img: {
      type: String
    },
    content: {
      type: String
    }
  },
  {
      // *Ponlo tal y como esta en esta parte
      timestamps:true , //createAt, UpdateAt
      versionKey: false
  }
)

ElementScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("elements", ElementScheme);
