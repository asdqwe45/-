import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
export declare class DeadDogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    getAllDeadDogs(): Promise<any>;
    getAllDeadDogsCount(): Promise<number>;
    getOneDeadDog(DogID: number): Promise<Dog>;
}
