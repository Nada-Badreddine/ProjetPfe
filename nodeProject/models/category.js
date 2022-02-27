
import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    name: String,
    reference:Number,
},
{
  timestamps: true,
  toJSON: {
    transform: (doc, category) => {
        category.id = category._id;
      delete category._id;
      delete category.__v;
    },
  },
});

export default mongoose.model('Category', schema);
