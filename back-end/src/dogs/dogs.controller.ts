import { Controller, Get, Param, Delete, Put, Patch,Post,Body } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Controller('dogs')
export class DogController {
  constructor(
    private readonly dogService: DogsService
  ) {}
  private dogs: Dog[] = [];
  @Get()
  async findAll(): Promise<any> {
    return this.dogService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') ID: string): Promise<any>  {
    return this.dogService.getOne(ID);
  }
  @Delete('/:id')
  deleteOne(@Param('id') ID: string): Promise<any> {
    return this.dogService.deleteOne(ID);
  }
  @Post()
  create(@Body() dogData) {
    return this.dogService.create(dogData);
  }
  @Patch('/:id')
  patch(@Param('id') DogID : string, @Body() updateData) {
    return {
      updateDog: DogID,
      ...updateData,
    };
  }
}