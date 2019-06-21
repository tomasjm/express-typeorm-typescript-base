import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  facebook_id!: string;

  @Column()
  google_id!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
