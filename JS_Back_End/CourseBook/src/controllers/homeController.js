import { Router } from 'express';
import {getAll, getById, getRecent, signUp} from "../services/courseService.js";
import {getUserById, login} from "../services/userService.js";
import {isUser} from "../middlewares/guards.js";
import {parseError} from "../util.js";

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const courses = await getRecent();

    res.render('home', { courses });
});

homeRouter.get('/catalog', async (req, res) => {
    const courses = await getAll();

    res.render('catalog', { courses });
});


homeRouter.get('/catalog/:id', async (req, res) => {
    const course = await getById(req.params.id);
    if (!course) {
        res.status(404).render('404');
        return;
    }

    const authorId = course.owner;
    const user = await getUserById(authorId);
    if (!user) {
        throw new Error('User not found');
    }


    course.hasUser = res.locals.hasUser;
    course.isOwner = req.user?._id === authorId.toString();
    course.createdBy = user.email
    course.isSignUp = Boolean(course.signUpList.find(l => l.toString() === req.user?._id));

    res.render('details',{ course });
});

homeRouter.get('/sign-up/:courseId', isUser(), async (req, res) => {
    const { courseId } = req.params;
    const userId = req.user._id;

    try {
        const result = await signUp(courseId, userId);

        res.redirect('/catalog/' + courseId);
    } catch (e) {
        res.render('/details', {
            errors: parseError(e).errors
        });
    }
});

export { homeRouter };