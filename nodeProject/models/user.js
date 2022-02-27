import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
    },

},
    {
        timestamps: true,
        toJSON: {
            transform: (doc, user) => {
                user.id = user._id;
                delete user._id;
                delete user.__v;
            },
        },
    });

export default mongoose.model('User', schema);
