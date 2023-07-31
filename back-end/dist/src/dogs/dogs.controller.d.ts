import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
import { UpdateDogDto } from './DTO/update.dog.dto';
export declare class DogController {
    private readonly dogService;
    constructor(dogService: DogsService);
    private dogs;
    findAll(): Promise<any>;
    getOne(ID: number): Promise<Dog>;
    deleteOne(ID: number): Promise<any>;
    create(dogData: any): void;
    patch(DogID: number, updateData: UpdateDogDto): void;
}
