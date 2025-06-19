import { Router } from 'express';

//TODO replace with real router according to exam description
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const items = [];

    res.render('home', { items });
});

export { homeRouter };