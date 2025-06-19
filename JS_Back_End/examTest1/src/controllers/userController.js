import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { isGuest } from "../middlewares/guards.js";
import { register, login } from "../services/userService.js";
import { createToken } from "../services/jwtService.js";
import { parseError } from "../util.js";

const userRouter = Router();

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register', );
});

userRouter.post(
    '/register',
    isGuest(),
    body('email').trim().isEmail().isLength({ min: 10 }).withMessage('Email must be at least 10 characters long'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    body('repass').trim().custom((value, { req }) => req.body.password === value).withMessage('Passwords do not match'),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await register(email, password);
            const token = createToken(result);
            res.cookie('token', token);

            res.redirect('/');
        } catch (e) {
            res.render('register', {
                data: { email },
                errors: parseError(e).errors
            });
        }
    }
);


userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login', );
});

userRouter.post(
    '/login',
    isGuest(),
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await login(email, password);
            const token = createToken(result);

            res.cookie('token', token);

            res.redirect('/');
        } catch (e) {
            res.render('login', {
                data: { email },
                errors: parseError(e).errors
            });
        }
    }
);

userRouter.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

export { userRouter };
