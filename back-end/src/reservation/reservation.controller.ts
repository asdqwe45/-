import { Query, Controller, Get, Param, Delete, Put, Post,Body } from '@nestjs/common';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
import { ReservationService } from './reservation.service';

@Controller('api/reservation')
export class ReservationController {
  constructor(
    private readonly reservationService: ReservationService
  ) {}

  @Get()
  async getReservedTimeByDate(@Query('date') date: Date =new Date()): Promise<any>{
    return this.reservationService.getReservedTimeByDate(date);
  }

  @Delete('/:reservationID')
  async deleteOne(@Param('reservationID') ID: number) {
        return await this.reservationService.deleteOne(ID);
  }

//   @Get()
//   async getDogs(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 100):Promise<any> {
//     const lostDogs = await this.lostDogsService.getAllLostDogs();
//     const totalItem = await this.lostDogsService.getAllLostDogsCount();
//     if(isNaN(page)||isNaN(pageSize)){
//       page=1;
//       pageSize=totalItem;
//     }
//     const startIndex = (page-1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const lostDog = lostDogs.slice(startIndex,endIndex);
//     return {totalItem,lostDog};
//   }
//   @Get(':id')
//   getOneLostDog(@Param('id') ID: number)  {
//     return this.lostDogsService.getOneLostDog(ID);
//   }
//   @Delete('/:id')
//   deleteOne(@Param('id') ID: number): Promise<any> {
//     return this.lostDogsService.deleteOne(ID);
//   }
//   @Post()
//   create(@Body() dogData) {
//     this.lostDogsService.create(dogData);
//   }
//   @Put('/:id')
//   patch(@Param('id') DogID : number, @Body() updateData: UpdateDogDto) {
//     this.lostDogsService.update(DogID,updateData);
//   }
}