const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title : { type: String, required: true, message:"Book title should be provided" },
  pages: { type: Number,required: true, message:"Book pages should be provided"},
  price: { type: Number, default:0 },
   image :{type: String,required: true, message:"Book image should be provided"},
  
  });

module.exports = mongoose.model("booksSchema", booksSchema);