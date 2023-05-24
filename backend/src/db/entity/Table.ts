import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Restaurant } from "./Restaurant.js";
import { Room } from "./Room.js";

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default : 0,
  })
  state: number;

  @ManyToOne(() => Room, (room) => room.table, {
    cascade : ['remove'],
  })
  @JoinColumn({ name : 'room_id'})
  room: Room;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.table,{
    cascade : ['remove']
  })
  @JoinColumn({ name : 'restaurant_id'})
    restaurant: Relation<Restaurant>;

}
