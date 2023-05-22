import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;
}
