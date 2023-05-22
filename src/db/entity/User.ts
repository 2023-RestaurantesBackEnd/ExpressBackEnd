import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  phoneNumber: string;

  @Column({
    nullable: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  profileImage: string;

  @Column()
  device: string;

  @Column()
  token: string;
}
