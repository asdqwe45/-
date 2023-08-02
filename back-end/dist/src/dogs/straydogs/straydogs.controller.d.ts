import { StrayDogsService } from './strayDogs.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
export declare class StrayDogsController {
    private readonly strayDogsService;
    constructor(strayDogsService: StrayDogsService);
    getDogs(page?: number, pageSize?: number): Promise<any>;
    getOneStrayDog(ID: number): Promise<import("../entities/dogs.entity").Dog>;
    deleteOne(ID: number): Promise<any>;
    create(dogData: any): void;
    patch(DogID: number, updateData: UpdateDogDto): void;
}
