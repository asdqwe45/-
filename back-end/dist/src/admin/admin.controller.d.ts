import { DogsService } from 'src/dogs/dog/dogs.service';
import { UserService } from 'src/user/user.service';
export declare class AdminController {
    private readonly dogService;
    private readonly userService;
    constructor(dogService: DogsService, userService: UserService);
    getDogs(page?: number, pageSize?: number): Promise<any>;
    getUser(page?: number, pageSize?: number): Promise<any>;
    getOneUser(ID: string): Promise<Partial<import("../user/entities/user.entity").User>>;
}
