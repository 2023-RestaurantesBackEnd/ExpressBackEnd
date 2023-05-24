import { Request, Response, Router } from "express";
import { AppDataSource } from "../db/data-source.js";
import { Restaurant } from "../db/entity/Restaurant.js";
import validateCreate from "../validators/restaurants.validator.js"

const restaurantRepo = AppDataSource.getRepository(Restaurant);
const router = Router();

router.get("/restaurants", async (req: Request, res: Response) => {
  const restaurants = await restaurantRepo.find();
  res.send(restaurants);
});

router.get("/restaurants/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const restaurant = await restaurantRepo.findOneBy({
    id: Number(id),
  });
  res.send(restaurant);
});

router.delete("/restaurants/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const restaurantToDelete = await restaurantRepo.delete({
    id: Number(id),
  });
  res.send({
    status: "Deleted successfully",
    restaurant: restaurantToDelete,
  });
});

router.post("/restaurants", validateCreate , async (req: Request, res: Response) => {
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
});

export default router;
