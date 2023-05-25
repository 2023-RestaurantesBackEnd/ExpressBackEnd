import { Request, Response } from "express";
import { AppDataSource } from "../../db/data-source.js";
import { Restaurant } from "../../db/entity/restaurant.js";

const restaurantRepo = AppDataSource.getRepository(Restaurant);

const getAllRestaurants = async (req: Request, res: Response) => {
  const restaurants = await restaurantRepo.find();
  res.send(restaurants);
};

export default getAllRestaurants;
