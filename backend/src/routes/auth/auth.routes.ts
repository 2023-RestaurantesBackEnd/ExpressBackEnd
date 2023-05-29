import { Router } from "express";
import login from "./login.js";
import validateNewUser from "../../validators/user.validator.js";
import createUser from "../user/create-user.js";
import uploadedProfile from "../../middlewares/imageHelper.js";

const router = Router();
const profile = uploadedProfile.uploadedProfile

router.post("/login", login);
router.post("/register", validateNewUser, profile ,createUser);


export default router;
