// TODO import routers
import { homeRouter } from '../controllers/homeController.js';
import { userRouter } from "../controllers/userController.js";

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
}
export { configRoutes };