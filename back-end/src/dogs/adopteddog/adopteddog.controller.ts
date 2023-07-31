import { Query, Controller, Get, Param, Delete, Put, Patch,Post,Body } from '@nestjs/common';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
import { AdoptedDogsService } from './adopteddog.service';

@Controller('adopteddog')
export class AdoptedDogsController {
  constructor(
    private readonly adoptedDogsService: AdoptedDogsService
  ) {}
  @Get()
  async getDogs(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 10):Promise<any> {
    const strayDogs = await this.adoptedDogsService.getAllAdoptedDogs();
    if(isNaN(page)||isNaN(pageSize)){
      page=1;
      pageSize=10;
    }
    const startIndex = (page-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginationStrayDogs = strayDogs.slice(startIndex,endIndex);
    return paginationStrayDogs;
  }
  @Get(':id')
  getOneLostDog(@Param('id') ID: number)  {
    return this.adoptedDogsService.getOneAdoptedDog(ID);
  }
  @Delete('/:id')
  deleteOne(@Param('id') ID: number): Promise<any> {
    return this.adoptedDogsService.deleteOne(ID);
  }
  @Post()
  create(@Body() dogData) {
    this.adoptedDogsService.create(dogData);
  }
  @Patch('/:id')
  patch(@Param('id') DogID : number, @Body() updateData: UpdateDogDto) {
    this.adoptedDogsService.update(DogID,updateData);
  }
}