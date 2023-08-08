import {
  Controller,
  Get,
  Post,
  Param,
  UploadedFile,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import { join } from 'path';
import { DogsService } from 'src/dogs/dog/dogs.service';
@Controller('api/image')
export class ImageController {
  constructor(private readonly dogService: DogsService) {} // 이 부분은 사용자의 서비스 이름에 따라 변경됩니다.

  @Post(':DogID')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @Param('DogID') dogId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // 이미지 경로를 DB에 저장하기
    await this.dogService.updateImage(dogId, file.path);
    return { message: 'Image uploaded successfully!', path: file.path };
  }

  @Get(':DogID')
  async fetchImage(@Param('DogID') dogId: number, @Res() res: Response) {
    const imagePath = await this.dogService.findImagePathByDogId(dogId);
    return res.sendFile(join(process.cwd(), imagePath));
  }
}
