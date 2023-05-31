import { expressjwt } from "express-jwt";
import { config } from "dotenv";
import verifyToken from "../middlewares/tokenHelper.js";

config();

const jwt = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/v1/login", "/api/v1/register"],
  });

export default jwt