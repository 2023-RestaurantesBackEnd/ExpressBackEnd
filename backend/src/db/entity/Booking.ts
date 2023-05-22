import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peopleAmount: number;

  @Column()
  bookingCreation: string;

  @Column()
  state: number;
}
