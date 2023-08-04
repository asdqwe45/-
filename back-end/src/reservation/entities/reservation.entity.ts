import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Reservation')
export class Reservation { 
  [x: string]: any;
  @PrimaryGeneratedColumn()
  ReservationID: number;

  @Column('int')
  DogID: number;

  @Column('int')
  seq: number;

  @Column()
  ReservationDatetime: Date;

  @Column({ length: 255 })
  Confirm: string;

  @Column({ length: 255 })
  Type: string;
}