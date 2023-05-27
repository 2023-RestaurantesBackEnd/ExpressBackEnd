import { Router } from "express";
import getUserById from "./get-user.js";
import getAllUsers from "./get-all-users.js";
import createUser from "./create-user.js";
import deleteUser from "./delete-user.js";

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/register", createUser);
router.delete("/delete_user/:id", deleteUser);

export default router;
