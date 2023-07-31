import { Controller, Get, Param, Delete, Put, Patch,Post,Body } from '@nestjs/common';
import { LostDogsService } from './lost.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Controller('lostdogs')
export class LostDogsController {
  constructor(
    private readonly lostDogsService: LostDogsService
  ) {}
  @Get()
  getAllLostDogs(){
    return this.lostDogsService.getAllLostDogs();
  }
  @Get(':id')
  getOneLostDog(@Param('id') ID: number)  {
    return this.lostDogsService.getOneLostDog(ID);
  }
  @Delete('/:id')
  deleteOne(@Param('id') ID: number): Promise<any> {
    return this.lostDogsService.deleteOne(ID);
  }
  @Post()
  create(@Body() dogData) {
    this.lostDogsService.create(dogData);
  }
  @Patch('/:id')
  patch(@Param('id') DogID : number, @Body() updateData: UpdateDogDto) {
    this.lostDogsService.update(DogID,updateData);
  }
}