const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');

const CategoriesScheme = (
  {
    title: String
  },
  {
    // *Ponlo tal y como esta en esta parte
    timestamps: true, //createAt, UpdateAt
    versionKey: false
  }
)

CategoriesScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports=mongoose.model("categories", CategoriesScheme);
