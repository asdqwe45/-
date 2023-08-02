import { DogsService } from './dogs.service';
import { Dog } from '../entities/dogs.entity';
import { Repository } from 'typeorm';
export declare class DogsController {
    private readonly dogService;
    private dogsRepository;
    constructor(dogService: DogsService, dogsRepository: Repository<Dog>);
    private dogs;
    getDogs(): Promise<Dog[]>;
}
