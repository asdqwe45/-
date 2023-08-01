import { DeadDogsService } from './deaddog.service';
export declare class DeadDogsController {
    private readonly adoptedDogsService;
    constructor(adoptedDogsService: DeadDogsService);
    getDogs(page?: number, pageSize?: number): Promise<any>;
    getOneLostDog(ID: number): Promise<import("../entities/dogs.entity").Dog>;
}
