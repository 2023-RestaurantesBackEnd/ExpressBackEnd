import { Request, Response, Router } from "express";
import { io } from "../index.js";
import { AppDataSource } from "../db/data-source.js";
import { User } from "../db/entity/User.js";

const usersRepo = AppDataSource.getRepository(User);
const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  const users = await usersRepo.find();
  res.send(users);
});

router.post("/users", async (req: Request, res: Response) => {
  const {
    username,
    password,
    device,
    email,
    phoneNumber,
    profileImage,
    token,
  } = req.body;

  const createdUser = await usersRepo.save({
    username,
    password,
    device,
    email,
    phoneNumber,
    profileImage,
    token,
  });

  io.emit("update", createdUser);

  res.send({
    success: "User created successfully",
  });
});

export default router;
