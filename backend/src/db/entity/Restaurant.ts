import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Table } from "./Table.js";
import { Room } from "./Room.js";
import { RestaurantProfile } from "./RestaurantProfile.js";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restaurantName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  terrace: boolean;

  @Column({
    type: "float",
    nullable: true,
    default: 0.0,
  })
  score: number;

  @Column("float")
  avg_price: number;

  @Column()
  typeFood: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  imgProfile: string;

  @Column({ nullable: true })
  imgGallery: string;

  @Column({
    nullable: true,
    length: 1000,
  })
  description: string;

  @Column("double")
  latitude: number;

  @Column("double")
  longitude: number;

  @Column({ default: 0 })
  status: number;

  @OneToMany(() => Table, (table) => table.restaurant, {
    cascade: ["update"],
  })
  @JoinColumn({ name: "table_id" })
  table: Table[];

  @OneToMany(() => Room, (room) => room.restaurant, {
    cascade: ["update", "remove"],
  })
  @JoinColumn({ name: "room_id" })
  room: Room[];

  @OneToOne(
    () => RestaurantProfile,
    (restaurantProfile) => restaurantProfile.restaurant,
    {
      cascade: ["update", "remove"],
    }
  )
  @JoinColumn({ name: "restProf_id" })
  restaurantProfile: Relation<RestaurantProfile>;
}
