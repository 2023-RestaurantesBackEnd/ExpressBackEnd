import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RestaurantProfile {
  @PrimaryGeneratedColumn()
  id: number;
}
