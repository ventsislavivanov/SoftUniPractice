import { Router } from 'express';
import {getAll, getById, search} from "../services/volcanoService.js";

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const volcanoes = await getAll();

    res.render('catalog', { volcanoes });
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    const { id } = req.params;
    const volcano = await getById(id);

    const userId = req.user?._id;

    if (!volcano) {
        res.status(404).render('404');
        return;
    }

    volcano.votes = volcano.voteList.length;
    volcano.hasUser = res.locals.hasUser;
    volcano.isAuthor = volcano.author.toString() === userId;
    volcano.hasVoted = Boolean(volcano.voteList.find(v => v.toString() === userId));

    res.render('details', { volcano });
});

catalogRouter.get('/search', async (req, res) => {
    const { name, typeVolcano } = req.query;

    const volcanoes = await search(name, typeVolcano);

    res.render('search', {
        volcanoes,
        data: { name, typeVolcano },
    });
});

export { catalogRouter };