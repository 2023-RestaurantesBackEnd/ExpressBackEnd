import { Router } from "express";
import jwt from "../middlewares/jwtHelper.js";
import roomRouter from "./room/room.routes.js";
import userRouter from "./user/user.routes.js";
import tableRouter from "./table/table.routes.js";
import restaurantRouter from "./restaurant/restaurant.routes.js";
import bookingRouter from "./booking/booking.routes.js";
import opinionsRouter from "./opinion/opinion.routes.js";
import authRouter from "./auth/auth.routes.js";

const apiRouter = Router();
const routes = Router();

routes.use("/api/v1", jwt, apiRouter);

apiRouter.use(roomRouter);
apiRouter.use(userRouter);
apiRouter.use(tableRouter);
apiRouter.use(restaurantRouter);
apiRouter.use(bookingRouter);
apiRouter.use(opinionsRouter);
apiRouter.use(authRouter);

export default routes;
