import { Request, Response } from "express";
import { AppDataSource } from "../../db/data-source.js";
import { Restaurant } from "../../db/entity/restaurant.js";

const restaurantRepo = AppDataSource.getRepository(Restaurant);

const deleteRestaurantById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const restaurantToDelete = await restaurantRepo.delete({
    id: Number(id),
  });
  res.send({
    status: "Deleted successfully",
    restaurant: restaurantToDelete,
  });
};

export default deleteRestaurantById;
