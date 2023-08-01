import { AdoptedDogsService } from './adopteddog.service';
export declare class AdoptedDogsController {
    private readonly adoptedDogsService;
    constructor(adoptedDogsService: AdoptedDogsService);
    getDogs(page?: number, pageSize?: number): Promise<any>;
    getOneLostDog(ID: number): Promise<import("../entities/dogs.entity").Dog>;
}
