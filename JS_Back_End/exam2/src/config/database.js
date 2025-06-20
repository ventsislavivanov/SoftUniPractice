import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Volcano } from '../models/Volcano.js';

async function configDatebase() {
    // TODO set datebase name
    const connectionString = 'mongodb://localhost:27017/magma_haven';

    await mongoose.connect(connectionString);
    console.log('Connected to database');
}

export { configDatebase };