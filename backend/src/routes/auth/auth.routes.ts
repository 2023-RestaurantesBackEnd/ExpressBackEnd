import { Router } from "express";
import uploadedProfile from '../../middlewares/imageHelper.js'
import login from "./login.js";
import createUser from "../user/create-user.js";
import validateNewUser from "../../validators/user.validator.js";

const profileImg = uploadedProfile.uploadedProfile
const router = Router();

router.post("/login", login);
router.post("/register",validateNewUser, profileImg ,createUser)

export default router;
