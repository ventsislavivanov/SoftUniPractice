import { Router } from 'express';
import {getAll, getById, getRecent} from "../services/stoneService.js";

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();

    res.render('home', { stones });
});

homeRouter.get('/catalog', async (req, res) => {
    const stones = await getAll();

    res.render('catalog', { stones });
});

homeRouter.get('/catalog/:id', async (req, res) => {
    const stone = await getById(req.params.id);

    if (!stone) {
        res.render('404');
        return;
    }

    const isOwner = req.user?._id === stone.author.toString();
    const hasLiked = Boolean(stone.likes.find(l => l.toString() === req.user?._id));

    res.render('details',{ stone, isOwner, hasLiked });
});


export { homeRouter };