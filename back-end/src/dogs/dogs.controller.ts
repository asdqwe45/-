import { Controller, Get, Param, Delete, Put, Patch,Post,Body } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
import { UpdateDogDto } from './DTO/update.dog.dto';

@Controller('dogs')
export class DogController {
  constructor(
    private readonly dogService: DogsService,
  ) {}
  private dogs: Dog[] = [];
  @Get()
  findAll(): Promise<any> {
    return this.dogService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') ID: number)  {
    return this.dogService.getOne(ID);
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