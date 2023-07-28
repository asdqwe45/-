import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
import { CreateDogDto } from './DTO/create.dog.dto';
export declare class DogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    private dogs;
    getAll(): Promise<any>;
    getOne(DogID: string): Promise<any>;
    deleteOne(DogID: string): Promise<any>;
    create(dogData: CreateDogDto): Promise<void>;
    update(DogID: string, updateData: any): void;
}
