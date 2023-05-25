import { Request, Response } from "express";
import { AppDataSource } from "../../db/data-source.js";
import { Restaurant } from "../../db/entity/restaurant.js";

const restaurantRepo = AppDataSource.getRepository(Restaurant);

const createRestaurant = async (req: Request, res: Response) => {
  const { restaurantName, email, password } = req.body;

  const restaurantToSave = await restaurantRepo.save({
    restaurantName,
    email,
    password,
  });

  res.send({
    status: "success",
    restaurant: restaurantToSave,
  });
};

export default createRestaurant;
