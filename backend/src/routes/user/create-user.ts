import { Request, Response } from "express";
import { AppDataSource } from "../../db/data-source.js";
import { User } from "../../db/entity/user.js";
import { io } from "../../index.js";

const usersRepo = AppDataSource.getRepository(User);

const createUser = async (req: Request, res: Response) => {
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
};

export default createUser;
