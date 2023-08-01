import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
export declare class StrayDogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    getAllStrayDogs(): Promise<any>;
    getOneStrayDog(DogID: number): Promise<Dog>;
    deleteOne(DogID: number): Promise<void>;
    create(dogData: CreateDogDto): Promise<void>;
    update(DogID: number, updateData: UpdateDogDto): Promise<void>;
}
