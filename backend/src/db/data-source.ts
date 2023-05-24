import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
import { Restaurant } from "./entity/Restaurant.js";
import { Booking } from "./entity/Booking.js";
import { RestaurantProfile } from "./entity/RestaurantProfile.js";
import { Table } from "./entity/Table.js";
import { Room } from "./entity/Room.js";
import { Opinion } from "./entity/Opinion.js";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "backend",
  synchronize: true,
  logging: true,
  entities: [User, Restaurant, Booking, RestaurantProfile, Room, Table, Opinion],
  subscribers: [],
  migrations: [],
});
