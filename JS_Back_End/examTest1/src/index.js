import express from 'express';
import { configDatebase } from './config/database.js';
import { configExpress } from './config/express.js';
import { configHbs } from './config/hbs.js';
import { configRoutes } from './config/routes.js';

import { register, login } from './services/userService.js';
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
        // integrationTesting();
    });
}

async function integrationTesting() {
    try {
        const result = await register('test@test.bg', '123456');
        console.log(result);

        const token = createToken(result);
        console.log(token);

        const parsedData = verifyToken(token);
        console.log(parsedData);
    } catch (e) {
        console.log('Caught error');
        console.log(e.message);
    }
}
