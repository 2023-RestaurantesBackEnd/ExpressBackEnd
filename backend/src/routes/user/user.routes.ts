import { Router } from "express";

import getUsers from "./get-users.js";
import createUser from "./create-user.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);

export default router;
