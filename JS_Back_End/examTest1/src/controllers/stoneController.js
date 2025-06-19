import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { isUser } from "../middlewares/guards.js";
import { parseError } from "../util.js";
import { getById, create, update, deleteById, likeStone} from "../services/stoneService.js";

const stoneRouter = Router();

stoneRouter.get(
    '/create', isUser(), async (req, res) => {
    res.render('create');
});

stoneRouter.post(
    '/create',
    isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Stone name must be at least 2 characters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('Stone category must be at least 3 characters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('Stone color must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Stone image should be valid URL'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Stone location must be at between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 2, max: 30 }).withMessage('Stone formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('Stone description must be at least 10 characters long'),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(req.body, req.user._id);

            res.redirect('/catalog');
        } catch (e) {
            res.render('create', {
                data: req.body,
                errors: parseError(e).errors
            });
        }
    }
);

stoneRouter.get(
    '/edit/:id', isUser(), async (req, res) => {
        const stone = await getById(req.params.id);

        if (!stone) {
            res.render('404');
            return;
        }

        const isOwner = req.user._id === stone.author.toString();

        if (!isOwner) {
            res.redirect('/login');
            return;
        }

        res.render('edit', { data: stone });
    });

stoneRouter.post(
    '/edit/:id',
    isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Stone name must be at least 2 characters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('Stone category must be at least 3 characters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('Stone color must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Stone image should be valid URL'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Stone location must be at between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 2, max: 30 }).withMessage('Stone formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('Stone description must be at least 10 characters long'),
    async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(stoneId, req.body, userId);

            res.redirect('/catalog/' + stoneId);
        } catch (e) {
            res.render('edit', {
                data: req.body,
                errors: parseError(e).errors
            });
        }
    }
);

stoneRouter.get(
    '/delete/:id',
    isUser(),
    async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;

        try {
            const result = await deleteById(stoneId, userId);

            res.redirect('/');
        } catch (e) {
            res.redirect('/catalog/' + stoneId);
        }
    }
);

stoneRouter.get(
    '/like/:id',
    isUser(),
    async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;

        try {
            const result = await likeStone(stoneId, userId);

            res.redirect('/catalog/' + stoneId);
        } catch (e) {
            res.redirect('/');
        }
    }
);

export { stoneRouter };