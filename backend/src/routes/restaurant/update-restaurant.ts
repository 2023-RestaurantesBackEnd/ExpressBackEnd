import { Request, Response } from "express";
import { AppDataSource } from "../../db/data-source.js";
import { Restaurant } from "../../db/entity/restaurant.js";

const restaurantRepo = AppDataSource.getRepository(Restaurant);

const updateRestaurantById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
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

  // Buscar el restaurante a actualizar por su ID
  const restaurantToUpdate = await restaurantRepo.findOneBy({ id: Number(id) });

  if (!restaurantToUpdate) {
    return res.status(404).send("Restaurante no encontrado");
  }

  // Actualizar los campos del restaurante con los valores nuevos
  restaurantToUpdate.restaurantName = restaurantName;
  restaurantToUpdate.phone = phone;
  restaurantToUpdate.email = email;
  restaurantToUpdate.password = password;
  restaurantToUpdate.address = address;
  restaurantToUpdate.city = city;
  restaurantToUpdate.terrace = terrace;
  restaurantToUpdate.score = score;
  restaurantToUpdate.avgPrice = avgPrice;
  restaurantToUpdate.typeFood = typeFood;
  restaurantToUpdate.url = url;
  restaurantToUpdate.imgProfile = imgProfile;
  restaurantToUpdate.imgGallery = imgGallery;
  restaurantToUpdate.description = description;
  restaurantToUpdate.latitude = latitude;
  restaurantToUpdate.longitude = longitude;
  restaurantToUpdate.status = status;

  // Guardar los cambios en la base de datos
  const updatedRestaurant = await restaurantRepo.save(restaurantToUpdate);

  res.send({
    status: "success",
    restaurant: updatedRestaurant,
  });
};

export default updateRestaurantById;
