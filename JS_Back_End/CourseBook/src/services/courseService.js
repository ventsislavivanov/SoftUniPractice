import { Course } from '../models/Course.js';
import {Types} from "mongoose";

// TODO replace with real date service
async function getAll() {
    return Course.find().lean();
}

async function getById(id) {
    return Course.findById(id).lean();
}

async function getRecent() {
    return Course.find().sort({ $natural: -1 }).limit(3).lean();
}

async function signUp(courseId, userId) {
    const record = await Course.findById(courseId);

    if (!record) {
        throw new ReferenceError('Record not found ' + courseId);
    }

    if (record.author.toString() === userId) {
        throw new Error('Cannot vote for your own volcano');
    }

    if (record.signUpList.find(v => v.toString() === userId)) {
        throw new Error('Already voted');
    }

    record.signUpList.push(userId);

    await record.save();

    return record;
}

async function create(data, authorId) {
    const record = new Course({
        title: data.title,
        type: data.type,
        certificate: data.certificate,
        image: data.image,
        description: data.description,
        price: data.price,
        owner: authorId,
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Course.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() !== userId) {
        throw new Error('Access denied');
    }

    record.title = data.title;
    record.type = data.type;
    record.certificate = data.certificate;
    record.image = data.image;
    record.description = data.description;
    record.price = data.price;

    await record.save();

    return record;
}


async function deleteById(id, userId) {
    const record = await Course.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() !== userId) {
        throw new Error('Access denied');
    }

    await Course.findByIdAndDelete(id);
}

export {
    getAll,
    getById,
    getRecent,
    signUp,
    create,
    update,
    deleteById
};