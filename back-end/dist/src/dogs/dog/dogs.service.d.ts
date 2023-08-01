import { Dog } from '../entities/dogs.entity';
import { Repository } from 'typeorm';
import { CreateDogDto } from '../DTO/create.dog.dto';
export declare class DogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    private dogs;
    getOne(DogID: number): Promise<any>;
    getDogs(): Promise<Dog[]>;
    deleteOne(DogID: number): Promise<any>;
    create(dogData: CreateDogDto): Promise<void>;
    update(DogID: number, updateData: any): void;
}
