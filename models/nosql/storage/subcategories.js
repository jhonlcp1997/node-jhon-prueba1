const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');

const SubcategoriesScheme = new mongoose.Schema(
  {
    title:{
      
    }
  },
  {
    // *Ponlo tal y como esta en esta parte
    timestamps: true, //createAt, UpdateAt
    versionKey: false
  }
)
