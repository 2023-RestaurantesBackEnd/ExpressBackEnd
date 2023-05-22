import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
}
