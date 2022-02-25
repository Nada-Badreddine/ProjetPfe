const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({

    name: String,
    price:Number,
    productImg: String,
    description: String,
    category:{ type: Schema.Types.ObjectId, ref: 'Category' },
    });
    
module.exports = mongoose.model("Product", schema);