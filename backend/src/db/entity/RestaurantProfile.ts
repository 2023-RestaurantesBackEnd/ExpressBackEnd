import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Restaurant } from "./Restaurant.js";

@Entity()
export class RestaurantProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  profileImage: string;

  @Column()
  images: string;

  @Column()
  lat: number;

  @Column()
  long: number;

  @Column()
  city: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToOne(() => Restaurant, (restaurant) => restaurant.restaurantProfile)
  restaurant: Relation<Restaurant>;
}
