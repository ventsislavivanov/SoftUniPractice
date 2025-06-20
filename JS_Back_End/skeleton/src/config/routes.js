// TODO import routers
import { homeRouter } from '../controllers/homeController.js';
import { userRouter } from "../controllers/userController.js";

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);


    app.use((req, res) => {
        res.status(404).render('404');
    });
}
export { configRoutes };