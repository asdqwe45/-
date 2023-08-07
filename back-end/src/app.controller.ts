import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

<<<<<<< HEAD
@Controller('api')
=======
@Controller('/api')
>>>>>>> develop
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
