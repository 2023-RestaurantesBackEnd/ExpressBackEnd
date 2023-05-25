import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { randomBytes } from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({
    unique: true,
    nullable: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  phoneNumber: string;

  @Column()
  password: string;

  @Column({
    type: "integer",
    default: 0,
    unsigned: true,
    check: "role >= 0 AND role <= 10",
  })
  role: number;
   //El rol es un string de un numero, entre 0 y 10

  @Column({
    nullable: true,
  })
  profileImage: string;

  @Column()
  device: string;

  @Column()
  token: string;

  @BeforeInsert()
  generateToken() {
    this.token = randomBytes(32).toString('hex');
  }
}
