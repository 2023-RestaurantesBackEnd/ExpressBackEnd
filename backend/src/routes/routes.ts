import { Router } from "express"
import userRouter from "./user/user.routes.js"
import restaurantRouter from "./restaurant/restaurant.routes.js"

const apiRuter = Router()
const routes = Router();

routes.use('/api/v1', apiRuter)

apiRuter.use(userRouter)
apiRuter.use(restaurantRouter)

export default  routes