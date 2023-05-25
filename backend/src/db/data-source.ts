import { DataSource } from "typeorm";
import { User } from "./entity/user.js";
import { Restaurant } from "./entity/restaurant.js";
import { Booking } from "./entity/booking.js";
import { Table } from "./entity/table.js";
import { Room } from "./entity/room.js";
import { Opinion } from "./entity/opinion.js";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "backend",
  synchronize: true,
  logging: true,
  entities: [User, Restaurant, Booking, Room, Table, Opinion],
  subscribers: [],
  migrations: [],
});
