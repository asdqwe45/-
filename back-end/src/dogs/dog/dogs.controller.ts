import { Controller, Get, Param, Delete, Put, Patch,Post,Body,Query, ParseIntPipe } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from '../entities/dogs.entity';
import { UpdateDogDto } from '../DTO/update.dog.dto';
import { Repository } from 'typeorm';
@Controller('dog')
export class DogsController {
  constructor(
    private readonly dogService: DogsService,
    private dogsRepository: Repository<Dog>

  ) {}
  private dogs: Dog[] = [];

  @Get('/:id')
  getOne(@Param('id') ID: number)  {
    return this.dogService.getOne(ID);
  }

  @Get()
  async getDogs() {
    return this.dogService.getDogs();
  }

  @Delete('/:id')
  deleteOne(@Param('id') ID: number): Promise<any> {
    return this.dogService.deleteOne(ID);
  }

  @Post()
  create(@Body() dogData) {
    this.dogService.create(dogData);
  }
  
  @Patch('/:id')
  patch(@Param('id') DogID : number, @Body() updateData: UpdateDogDto) {
    this.dogService.update(DogID,updateData);
  }
}