import { Module } from '@nestjs/common';
import { StrayDogsController } from './straydogs.controller'
import { StrayDogsService } from './straydogs.service';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  controllers: [StrayDogsController],
  providers: [StrayDogsService,Repository]
})
export class StrayDogsModule {}
