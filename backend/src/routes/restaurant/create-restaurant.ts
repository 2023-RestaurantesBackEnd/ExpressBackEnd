import { Request, Response } from "express";
import { AppDataSource } from "../../db/data-source.js";
import { Restaurant } from "../../db/entity/restaurant.js";

const restaurantRepo = AppDataSource.getRepository(Restaurant);

const createRestaurant = async (req: Request, res: Response) => {
  const  {
    restaurantName,
    phone,
    email,
    password,
    address,
    city,
    terrace,
    score,
    avgPrice,
    typeFood,
    url,
    imgProfile,
    imgGallery,
    description,
    latitude,
    longitude,
    status,
  } = req.body;

  const restaurantToSave = await restaurantRepo.save({
    restaurantName,
    phone,
    email,
    password,
    address,
    city,
    terrace,
    score,
    avgPrice,
    typeFood,
    url,
    imgProfile,
    imgGallery,
    description,
    latitude,
    longitude,
    status,
  });

  res.send({
    status: "success",
    restaurant: restaurantToSave,
  });
};

export default createRestaurant;
