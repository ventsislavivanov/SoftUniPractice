import { Schema, model, Types } from 'mongoose';

// TODO replace with date model from exam description


const dataSchema = new Schema({
    prop: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

export const Data = model('Data', dataSchema);