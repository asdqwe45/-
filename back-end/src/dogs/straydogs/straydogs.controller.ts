import {
  Query,
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { StrayDogsService } from './straydogs.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
@Controller('api/straydog')
export class StrayDogsController {
  constructor(private readonly strayDogsService: StrayDogsService) {}
  @Get()
  async getDogs(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 100,
  ): Promise<any> {
    const strayDogs = await this.strayDogsService.getAllStrayDogs();
    const totalItem = await this.strayDogsService.getAllStrayDogsCount();
    if (isNaN(page) || isNaN(pageSize)) {
      page = 1;
      pageSize = totalItem;
    }
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const StrayDog = strayDogs.slice(startIndex, endIndex);
    return { totalItem, StrayDog };
  }
  @Get(':id')
  getOneStrayDog(@Param('id') ID: number) {
    return this.strayDogsService.getOneStrayDog(ID);
  }
  @Delete('/:id')
  deleteOne(@Param('id') ID: number): Promise<any> {
    return this.strayDogsService.deleteOne(ID);
  }
  @Post()
  @UseInterceptors(FileInterceptor('Image'))
  async create(@Body() dogData, @UploadedFile() file) {
    if(dogData.EnteredDay==='' ){
      dogData.EnteredDay=null;
    }
    if(dogData.LostDate==='' ){
      dogData.LostDate=null;
    }
    let filePath = null;
    if (file) {
      filePath =  path.basename(file.path);
      dogData.Image = filePath;
    }
    await this.strayDogsService.create(dogData, filePath);
    return { success: true, message: 'Dog created successfully!' };
  }
  @Put('/:id')
  @UseInterceptors(FileInterceptor('Image'))
  async updateDog(
    @Param('id') DogID: number,
    @Body() updateData: UpdateDogDto,
    @UploadedFile() file,
  ) {
    let filePath = null;
    if (file) {
      filePath =  path.basename(file.path);
      updateData.Image = filePath;
    }
    await this.strayDogsService.update(DogID, updateData);
    return { success: true, message: 'Dog updated successfully!' };
  }
}
