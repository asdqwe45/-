import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create.user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserInfo(@Request() req) {
    const { UserID, Admin } = req.user;
    // console.log(req.user);
    if (Admin == 0) {
      {
        const user = await this.userService.findOne(UserID);
        // console.log(user);
        return user;
      }
    }
    // admin이 1일경우
    else {
    }
  }

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Partial<User>> {
    return this.userService.findOne(id);
  }
  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Request() req) {
    const user = await this.userService.findOne(req.user.UserID);
    return this.userService.deleteUser(user);
  }
}
