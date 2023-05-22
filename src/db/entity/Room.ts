import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;
}
