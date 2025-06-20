import express from 'express';
import { configDatebase } from './config/database.js';
import { configExpress } from './config/express.js';
import { configHbs } from './config/hbs.js';
import { configRoutes } from './config/routes.js';

import { register, login } from './services/userService.js';
import { create, deleteById, getAll, update } from './services/courseService.js';
import { createToken, verifyToken } from './services/jwtService.js';
import {Types} from "mongoose";

start();

async function start() {
    const app = express();

    await configDatebase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, ()=> {
        console.log('Server is running http://localhost:3000');
        // integrationTestingUser();
        // integrationTestingData();
    });
}

async function integrationTestingUser() {
    try {
        const email = 'vic@test.com'
        const username = 'vic';
        const password = '1234';

        // const result = await register(email, username, password);
        const result = await login(email, password);
        // console.log(result);

        const token = createToken(result);
        console.log(token);

        const parsedData = verifyToken(token);
        console.log(parsedData);
    } catch (e) {
        console.log('Caught error');
        console.log(e.message);
    }
}
async function integrationTestingData() {
    try {
        const ownerId = '685556e6343951d0190cf0d0';
        const recordId = '6854220162a91228b0ab2fdb';
        const otherUserId = '6854197c69b2013c905c8b82';
        const data = {
            title: 'Spanish 1-4: Beginner, Elementary, Intermediate and Advanced',
            type: 'Language',
            certificate: 'Yes',
            image: 'http://localhost:3000/images/wallpaper.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '15',
        }

        //CRUD
        const result = await create(data, ownerId);
        // const result = await getAll(data, ownerId);
        // const result = await update(recordId, data, ownerId);
        // await deleteById(recordId, ownerId);
        console.log(result);

        //Vote
        // const result = await addVote(recordId, otherUserId);
        // console.log(result);

    } catch (e) {
        console.log('Caught error');
        console.log(e.message);
    }
}