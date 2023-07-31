import { Controller, Get, Param, Delete, Put, Patch,Post,Body } from '@nestjs/common';
import { StrayDogsService } from './strayDogs.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Controller('straydogs')
export class StrayDogsController {
  constructor(
    private readonly strayDogsService: StrayDogsService
  ) {}
  @Get()
  getAllStrayDogs(){
    return this.strayDogsService.getAllStrayDogs();
  }
  @Get(':id')
  getOneStrayDog(@Param('id') ID: number)  {
    return this.strayDogsService.getOneStrayDog(ID);
  }
  @Delete('/:id')
  deleteOne(@Param('id') ID: number): Promise<any> {
    return this.strayDogsService.deleteOne(ID);
  }
  @Post()
  create(@Body() dogData) {
    this.strayDogsService.create(dogData);
  }
  @Patch('/:id')
  patch(@Param('id') DogID : number, @Body() updateData: UpdateDogDto) {
    this.strayDogsService.update(DogID,updateData);
  }
}