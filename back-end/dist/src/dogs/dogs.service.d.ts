import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
import { CreateDogDto } from './DTO/create.dog.dto';
import { UpdateDogDto } from './DTO/update.dog.dto';
export declare class DogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    getAll(): Promise<any>;
    getOne(DogID: number): Promise<Dog>;
    deleteOne(DogID: number): Promise<void>;
    create(dogData: CreateDogDto): Promise<void>;
    update(DogID: number, updateData: UpdateDogDto): Promise<void>;
}
