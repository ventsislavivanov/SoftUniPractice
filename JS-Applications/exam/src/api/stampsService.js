import {del, get, post, put} from './requester.js';
import {baseStampsUrl} from "../constants.js";

async function getAll() {
  return get(`${baseStampsUrl}?sortBy=_createdOn%20desc`)
}

async function getById(stampId) {
  return get(`${baseStampsUrl}/${stampId}`);
}

async function create(stampData) {
  const postObj = {
    "name": stampData['name-input'],
    "imageUrl": stampData['image-url-input'],
    "year": stampData['year-input'],
    "learnMore": stampData['more-info-textarea']
  }

  return post(`${baseStampsUrl}`, postObj);
}

async function update(stampId, stampData) {
  const postObj = {
    "name": stampData['name-input'],
    "imageUrl": stampData['image-url-input'],
    "year": stampData['year-input'],
    "learnMore": stampData['more-info-textarea']
  }

  return put(`${baseStampsUrl}/${stampId}`, postObj);
}

async function remove(stampId) {
  return del(`${baseStampsUrl}/${stampId}`);
}

export default {
  getAll,
  getById,
  create,
  update,
  remove
};