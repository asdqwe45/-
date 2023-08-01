import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  Name: string;

  @IsString()
  UserID: string;

  @IsString()
  Password: string;

  @IsNumber()
  Admin: number;
  static UserId: any;
}
