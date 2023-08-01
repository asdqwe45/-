import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('User')
export class User { 
  [x: string]: any;
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ length: 100 })
  Name: string;

  @Column({ length: 100 })
  Email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 })
  PhoneNumber: string;

  @Column({ length: 100 })
  NickName: string;

  @Column({ length: 100 })
  Address: string;
}