import { Query, Controller, Get, Param} from '@nestjs/common';
import { DeadDogsService } from './deaddog.service';

@Controller('deaddog')
export class DeadDogsController {
  constructor(
    private readonly deadDogsService: DeadDogsService
  ) {}
  @Get()
  async getDeadDogs(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 10):Promise<any> {
    const DeadDogs = await this.deadDogsService.getAllDeadDogs();
    if(isNaN(page)||isNaN(pageSize)){
      page=1;
      pageSize=100;
    }
    const startIndex = (page-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const DeadDog = DeadDogs.slice(startIndex,endIndex);
    const totalItem = await this.deadDogsService.getAllDeadDogsCount();
    return {totalItem, DeadDog};
  }
  @Get(':id')
  getOneDeadDog(@Param('id') ID: number)  {
    return this.deadDogsService.getOneDeadDog(ID);
  }
}