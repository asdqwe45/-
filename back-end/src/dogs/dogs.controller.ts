import { Controller, Get, Param } from '@nestjs/common';
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
    const dogs = await this.dogService.findAll();
    const obj ={
      "dogs": dogs,
    };
    return obj;
  }
  // @Get('/:id')
  // async findOne(@Param('id') ID: number): Promise<any>  {
  //   const dogs = await this.dogService.findAll();
  //   const obj = {
  //     "dogs": dogs.find((dog) => dog.DogID === ID),
  //   };
  //   return obj;
  // }
}