import { Controller, Get, Param, Delete, Put, Patch,Post,Body,Query, ParseIntPipe } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from '../entities/dogs.entity';
import { UpdateDogDto } from '../DTO/update.dog.dto';
import { Repository } from 'typeorm';
@Controller('api/dog')
export class DogsController {
  constructor(
    private readonly dogService: DogsService,
  ) {}
  private dogs : Dog[] = [];
  @Get()
  async getDogs() {
    const dog = await this.dogService.getDogs();
    return {dog};
  }

  // @Get('/:id')
  // getOne(@Param('id') ID: number)  {
  //   return this.dogService.getOne(ID);
  // }

  // @Delete('/:id')
  // deleteOne(@Param('id') ID: number): Promise<any> {
  //   return this.dogService.deleteOne(ID);
  // }

  // @Post()
  // create(@Body() dogData) {
  //   this.dogService.create(dogData);
  // }
  
  // @Patch('/:id')
  // patch(@Param('id') DogID : number, @Body() updateData: UpdateDogDto) {
  //   this.dogService.update(DogID,updateData);
  // }
}