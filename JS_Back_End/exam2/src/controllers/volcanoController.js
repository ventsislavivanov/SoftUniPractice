import { Router } from 'express';
import { isUser } from "../middlewares/guards.js";
import { body, validationResult } from 'express-validator';
import {addVote, create, deleteById, getById, update} from "../services/volcanoService.js";
import { parseError } from "../util.js";

const volcanoRouter = Router();

volcanoRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

volcanoRouter.post(
    '/create',
    isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location must be at least 3 characters long'),
    body('elevation').trim().isInt({ min: 0 }).withMessage('Elevation must be a positive number'),
    body('lastEruption').trim().isInt({ min: 0, max: 2024 }).withMessage('Last Eruption must be a positive number'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('typeVolcano').trim(),
    body('description').trim().isLength({ min: 10 }).withMessage('Last Eruption must be at least 10 characters long'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(data, userId);

            res.redirect('/catalog');
        } catch (e) {
            res.render('register', {
                data,
                errors: parseError(e).errors
            });
        }
    }
);


volcanoRouter.get('/edit/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user._id;
    const volcano = await getById(volcanoId);

    if (!volcano) {
        res.status(404).render('404');
        return;
    }

    if (volcano.author.toString() !== userId) {
        res.redirect('/login');
    }

    res.render('edit', { data: volcano });
});

volcanoRouter.post(
    '/edit/:id',
    isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location must be at least 3 characters long'),
    body('elevation').trim().isInt({ min: 0 }).withMessage('Elevation must be a positive number'),
    body('lastEruption').trim().isInt({ min: 0, max: 2024 }).withMessage('Last Eruption must be a positive number'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('typeVolcano').trim(),
    body('description').trim().isLength({ min: 10 }).withMessage('Last Eruption must be at least 10 characters long'),
    async (req, res) => {
        const volcanoId = req.params.id;
        const data = req.body;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(volcanoId, data, userId);

            res.redirect('/catalog/' + volcanoId);
        } catch (e) {
            res.render('/');
        }
    }
);

volcanoRouter.get('/delete/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user._id;

    try {
        const result = await deleteById(volcanoId, userId);
    } catch (e) {
        if (e.message === 'Access denied') {
            res.redirect('/login');
            return;
        }
    }

    res.redirect('/catalog');
});

volcanoRouter.get('/vote/:volcanoId', isUser(), async (req, res) => {
    const { volcanoId } = req.params;
    const userId = req.user._id;

    try {
        const result = await addVote(volcanoId, userId);

        res.redirect('/catalog/' + volcanoId);
    } catch (e) {
        res.render('/details', {
            errors: parseError(e).errors
        });
    }
});

export { volcanoRouter };