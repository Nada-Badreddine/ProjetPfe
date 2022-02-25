const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({

    user:{ type: Schema.Types.ObjectId, ref: 'User' },
    ProductId:{ type: Schema.Types.ObjectId, ref: 'Product' },
    productName: String,
    productImg: String
      
    
    
    });
    
module.exports = mongoose.model("Favorite", schema);