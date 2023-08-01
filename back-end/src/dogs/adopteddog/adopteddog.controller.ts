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
    const adoptedDogs = await this.adoptedDogsService.getAllAdoptedDogs();
    if(isNaN(page)||isNaN(pageSize)){
      page=1;
      pageSize=100;
    }
    const startIndex = (page-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const adoptedDog = adoptedDogs.slice(startIndex,endIndex);
    const totalItem = await this.adoptedDogsService.getAllAdoptedDogsCount();
    return {totalItem, adoptedDog};
  }
  @Get(':id')
  getOneLostDog(@Param('id') ID: number)  {
    return this.adoptedDogsService.getOneAdoptedDog(ID);
  }
}