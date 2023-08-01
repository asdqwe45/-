import { Query,Controller, Get, Param, Delete, Put, Patch,Post,Body } from '@nestjs/common';
import { StrayDogsService } from './strayDogs.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
import { Dog } from '../entities/dogs.entity';
@Controller('straydog')
export class StrayDogsController {
  constructor(
    private readonly strayDogsService: StrayDogsService
  ) {}
  @Get()
  async getDogs(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 100):Promise<any> {
    const strayDogs = await this.strayDogsService.getAllStrayDogs();
    if(isNaN(page)||isNaN(pageSize)){
      page=1;
      pageSize=10;
    }
    const startIndex = (page-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const StrayDog = strayDogs.slice(startIndex,endIndex);
    const totalItem = await this.strayDogsService.getAllStrayDogsCount();
    return {totalItem,StrayDog};
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