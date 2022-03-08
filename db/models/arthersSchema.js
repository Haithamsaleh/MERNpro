const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arthersSchema = new mongoose.Schema({
  name: { type: String, required: true},
  age: { type: Number},
   nationality :{ type: String,required: true, message: "Author nationality should be provided" },
   image: {type: String,required: true, message: "Author image should be provided"},
   gender : { type: String},
 books : [{type: mongoose.Schema.Types.ObjectId, ref: "Books"}],

  
});


module.exports = mongoose.model("Arthers", arthersSchema); // arthers is refrans and name of the schema
