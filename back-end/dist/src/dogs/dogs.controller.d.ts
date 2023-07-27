import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
export declare class DogController {
    private readonly dogService;
    constructor(dogService: DogsService);
    findAll(): Promise<Dog[]>;
    getOne(ID: number): Dog;
}
