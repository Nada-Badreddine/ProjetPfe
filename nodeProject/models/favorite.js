import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    user:{ type: Schema.Types.ObjectId, ref: 'User' },
    ProductId:{ type: Schema.Types.ObjectId, ref: 'Product' },
    productName: String,
    productImg: String
},
{
  timestamps: true,
  toJSON: {
    transform: (doc, fav) => {
        fav.id = fav._id;
      delete fav._id;
      delete fav.__v;
    },
  },
});

export default mongoose.model('Favorite', schema);
