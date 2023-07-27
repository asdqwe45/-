import { Controller, Get, Param } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogsService) {}

  @Get()
  findAll(): Promise<Dog[]> {
    return this.dogService.findAll();
  }
  @Get('/:id')
  getOne(@Param('id') ID: number): Dog {
    return this.dogService.findOne(ID);
  }
}