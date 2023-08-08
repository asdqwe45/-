import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const mkdir = (directory: string) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

const storageDirectory = path.join(process.cwd(), 'uploads');
mkdir(storageDirectory);

export const multerOptionsFactory = (): MulterOptions => {
  return {
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, storageDirectory);
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        done(null, `${basename}_${Date.now()}${ext}`);
      },
    }),
    limits: { fileSize: 10 * 1024 * 1024 },
  };
};
