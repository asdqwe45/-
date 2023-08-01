import { DogsService } from './dogs.service';
import { Dog } from '../entities/dogs.entity';
import { UpdateDogDto } from '../DTO/update.dog.dto';
import { Repository } from 'typeorm';
export declare class DogsController {
    private readonly dogService;
    private dogsRepository;
    constructor(dogService: DogsService, dogsRepository: Repository<Dog>);
    private dogs;
    getOne(ID: number): Promise<any>;
    getDogs(): Promise<Dog[]>;
    deleteOne(ID: number): Promise<any>;
    create(dogData: any): void;
    patch(DogID: number, updateData: UpdateDogDto): void;
}
