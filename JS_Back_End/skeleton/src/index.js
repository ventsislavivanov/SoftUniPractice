import express from 'express';
import { configDatebase } from './config/database.js';
import { configExpress } from './config/express.js';
import { configHbs } from './config/hbs.js';
import { configRoutes } from './config/routes.js';

import { register, login } from './services/userService.js';
// import { addVote, create, deleteById, getAll, update } from './services/Service.js';
import { createToken, verifyToken } from './services/jwtService.js';

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
        integrationTestingData();
    });
}

async function integrationTestingUser() {
    try {
        const email = 'vic1@test.com'
        const username = 'vic1';
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
        const recordId = '6854220162a91228b0ab2fdb';
        const authorId = '6854184c23d50bc361c379a6';
        const otherUserId = '6854197c69b2013c905c8b82';
        const data = {
            name: 'Hunga Tonga',
            location: 'Tonga Islands',
            elevation: 114,
            lastEruption: 2023,
            image: 'http:localhost:3000/static/images/hunga-tonga.jpg',
            typeVolcano: 'Submarine',
            decription: 'Hunga Tonga-Hunga is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo\'ou and 65 km north of Tongatapu, Tonga\'s main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.',
        }

        //CRUD
        // const result = await create(data, authorId);
        // const result = await getAll(data, authorId);
        // const result = await update(recordId, data, authorId);
        // await deleteById(recordId, authorId);
        // console.log(result);

        //Vote
        // const result = await addVote(recordId, otherUserId);
        // console.log(result);

    } catch (e) {
        console.log('Caught error');
        console.log(e.message);
    }
}