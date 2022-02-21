const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({

 name: String,
 reference:Number,


    });
    
module.exports = mongoose.model("Category", schema);