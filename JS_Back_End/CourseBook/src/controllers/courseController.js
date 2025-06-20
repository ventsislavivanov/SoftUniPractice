import { Router } from 'express';
import { isUser } from "../middlewares/guards.js";
import { body, validationResult } from 'express-validator';
import {create, deleteById, getById, update} from "../services/courseService.js";
import { parseError } from "../util.js";

const courseRouter = Router();

courseRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

courseRouter.post(
    '/create',
    isUser(),
    body('title').trim().isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
    body('type').trim().isLength({ min: 3 }).withMessage('Type must be at least 3 characters long'),
    body('certificate').trim().isLength({ min: 2 }).withMessage('Certificate must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('description').trim().isLength({ min: 10 }).withMessage('Descriptionmust be at least 10 characters long'),
    body('price').trim().isInt({ min: 0 }).withMessage('Price must be a positive number'),
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
            res.render('create', {
                data,
                errors: parseError(e).errors
            });
        }
    }
);


export { courseRouter };