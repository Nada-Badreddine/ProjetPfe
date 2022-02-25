const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({

 name:{
     type:String,
     required:true
 },
 password:{
     type:String,
     required:true
 },
 email:{
     type:String,
     required:true,
     unique:true
 },
 role: { type: String,
         enum: ['admin', 'client'], 
         default: 'client'
          },


    });
    
module.exports = mongoose.model("User", schema);