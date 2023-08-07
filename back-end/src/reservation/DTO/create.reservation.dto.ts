import { IsString, IsNumber, IsEmail, IsDate } from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  ReservationID: number;

  @IsNumber()
  DogID: number;

  @IsNumber()
  seq: number;

  @IsDate()
  ReservationDatetime: Date;

  @IsString()
  Confirm: string;

  @IsString()
  Type: string;
}

