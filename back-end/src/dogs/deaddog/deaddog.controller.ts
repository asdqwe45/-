import { Query, Controller, Get, Param} from '@nestjs/common';
import { DeadDogsService } from './deaddog.service';

@Controller('deaddog')
export class DeadDogsController {
  constructor(
    private readonly adoptedDogsService: DeadDogsService
  ) {}
  @Get()
  async getDogs(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 10):Promise<any> {
    const adoptedDogs = await this.adoptedDogsService.getAllAdoptedDogs();
    if(isNaN(page)||isNaN(pageSize)){
      page=1;
      pageSize=10;
    }
    const startIndex = (page-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const adoptedDog = adoptedDogs.slice(startIndex,endIndex);
    return adoptedDog;
  }
  @Get(':id')
  getOneLostDog(@Param('id') ID: number)  {
    return this.adoptedDogsService.getOneAdoptedDog(ID);
  }
}