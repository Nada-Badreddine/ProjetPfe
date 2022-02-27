import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    name: String,
    price:Number,
    productImg: String,
    description: String,
    category:{ type: Schema.Types.ObjectId, ref: 'Category' },
},
{
  timestamps: true,
  toJSON: {
    transform: (doc, product) => {
        product.id = product._id;
      delete product._id;
      delete product.__v;
    },
  },
});

export default mongoose.model('Product', schema);
