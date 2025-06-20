import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Course } from '../models/Course.js'; // TODO import real data model

async function configDatebase() {
    // TODO set datebase name
    const connectionString = 'mongodb://localhost:27017/course_book ';

    await mongoose.connect(connectionString);
    console.log('Connected to database');
}

export { configDatebase };