import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { DogsService } from 'src/dogs/dog/dogs.service';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dog]),TypeOrmModule.forFeature([User])],
  controllers: [AdminController],
  providers: [DogsService,UserService,Repository]
})
export class AdminModule {}
