import { LostDogsService } from './lost.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
export declare class LostDogsController {
    private readonly lostDogsService;
    constructor(lostDogsService: LostDogsService);
    getAllLostDogs(): Promise<any>;
    getOneLostDog(ID: number): Promise<import("../entities/dogs.entity").Dog>;
    deleteOne(ID: number): Promise<any>;
    create(dogData: any): void;
    patch(DogID: number, updateData: UpdateDogDto): void;
}
