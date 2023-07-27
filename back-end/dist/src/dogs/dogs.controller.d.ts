import { DogsService } from './dogs.service';
export declare class DogController {
    private readonly dogService;
    constructor(dogService: DogsService);
    private dogs;
    findAll(): Promise<any>;
}
