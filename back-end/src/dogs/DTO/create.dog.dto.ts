import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateDogDto {
  @IsNumber()
  DogID: number;

  @IsString()
  Sex: string;

  @IsNumber()
  Age: number;

  @IsOptional()
  @IsString()
  ChipNumber: string;

  @IsString()
  Image: string;

  @IsString()
  Breed: string;

  @IsNumber()
  RemainedDay: number;

  @IsString()
  DogSize: string;

  @IsNumber()
  Weight: number;

  @IsOptional()
  @IsString()
  Status: string;

  @IsDate()
  EnteredDay: Date;

  @IsString()
  DiscoveredPlace: string;

  @IsString()
  LostLocation: string;

  @IsDate()
  LostDate: Date;

  @IsString()
  ReturnedHome: string;

  @IsString()
  UserID: string;
}
