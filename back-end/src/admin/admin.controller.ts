import { Controller, Get, Query, Param } from '@nestjs/common';
import { DogsService } from 'src/dogs/dog/dogs.service';
import { UserService } from 'src/user/user.service';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly dogService: DogsService,
        private readonly userService: UserService
      ) {}
    @Get('/dogs')
    async getDogs(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 100):Promise<any> {
        const Dogs = await this.dogService.getDogs();
        const totalItem = await this.dogService.getDogsCount();
        if(isNaN(page)||isNaN(pageSize)){
        page=1;
        pageSize=totalItem;
        }
        const startIndex = (page-1) * pageSize;
        const endIndex = startIndex + pageSize;
        const Dog = Dogs.slice(startIndex,endIndex);
        return {totalItem,Dog};
    }
    @Get('/user')
    async getUser(@Query('page') page: number = 1, @Query('pageSize') pageSize:number = 100):Promise<any> {
        const users = (await this.userService.findAll()).reverse();
        const totalItem = await this.userService.findAllCount();
        if(isNaN(page)||isNaN(pageSize)){
        page=1;
        pageSize=totalItem;
        }
        const startIndex = (page-1) * pageSize;
        const endIndex = startIndex + pageSize;
        const user = users.slice(startIndex,endIndex);
        return {totalItem,user};
    }
    @Get('/user/:id')
    getOneUser(@Param('userID') ID: string)  {
        return this.userService.findOne(ID);
    }
}
