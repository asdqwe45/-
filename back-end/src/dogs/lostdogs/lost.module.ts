import { Module } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LostDogsService } from './lost.service';
import { LostDogsController } from './lost.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  controllers: [LostDogsController],
  providers: [LostDogsService,Repository]
})
export class LostDogsModule {}
