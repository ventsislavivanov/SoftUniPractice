import { homeRouter } from '../controllers/homeController.js';
import { userRouter } from '../controllers/userController.js';
import { stoneRouter } from "../controllers/stoneController.js";

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(stoneRouter);
}
export { configRoutes };