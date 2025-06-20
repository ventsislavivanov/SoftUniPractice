import { Data } from '../models/data';

// TODO replace with real date service
async function getAll() {
    return Data.find().lean();
}

async function getById(id) {
    return Data.findById(id).lean();
}

async function create(data, authorId) {
    // TODO extract properties from view model
    const record = new Data({
        prop: data.prop,
        author: authorId,
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Data.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() !== userId) {
        throw new Error('Access denied');
    }

    //TODO Replace with real properties
    record.prop = data.prop;
    await record.save();

    return record;
}

// TODO add function to only update likes

async function deleteById(id, userId) {
    const record = await Data.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() !== userId) {
        throw new Error('Access denied');
    }

    await Data.findByIdAndDelete(id);
}

export {
    getAll,
    getById,
    create,
    update,
    deleteById
};