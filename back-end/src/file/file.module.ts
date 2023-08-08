import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptionsFactory } from 'src/common/utils/multer.options.factory';
import { ImageController } from './image.controller';
import { FileService } from './file.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: multerOptionsFactory,
    }),
  ],
  controllers: [ImageController],
  providers: [FileService],
})
export class FileModule {}
