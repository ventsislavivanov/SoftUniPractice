import { Schema, model } from 'mongoose';

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        collation: {
            locale: 'en',
            strength: 2
        }
    }
);

export const User = model('User', userSchema);
