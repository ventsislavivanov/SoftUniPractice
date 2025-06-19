import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Data } from '../models/Data.js'; // TODO import real data model

async function configDatebase() {
    // TODO set datebase name
    const connectionString = 'mongodb://localhost:27017/motto';

    await mongoose.connect(connectionString);
    console.log('Connected to database');
}

export { configDatebase };