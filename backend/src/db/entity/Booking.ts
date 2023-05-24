import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { User } from "./User.js";
import { Restaurant } from "./Restaurant.js";
import { Table } from "./Table.js";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peopleAmount: number;

  @Column()
  bookingCreation: Date;

  @Column({
    default: 0,
    nullable: true,
  })
  state: number;

  @OneToOne(() => User, {
    cascade: ["remove"],
  })
  @JoinColumn({ name: "user_id" })
  user: Relation<User>;

  @ManyToOne(() => Restaurant, {
    cascade: ["remove"],
  })
  @JoinColumn({ name: "restaurant_id" })
  restaurant: Relation<Restaurant>;

  @OneToOne(() => Table, {
    nullable: true,
  })
  @JoinColumn({ name: "table_id" })
  table: Relation<Table>;
}
