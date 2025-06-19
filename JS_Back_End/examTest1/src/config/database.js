import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Stone } from '../models/Stone.js';

async function configDatebase() {
    const connectionString = 'mongodb://localhost:27017/earth_treasure';

    await mongoose.connect(connectionString);
    console.log('Connected to database');
}

export { configDatebase };