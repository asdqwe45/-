import { StrayDogsService } from './straydogs.service';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
export declare class StrayDogsController {
    private readonly strayDogsService;
    constructor(strayDogsService: StrayDogsService);
    getDogs(page?: number, pageSize?: number): Promise<any>;
    getOneStrayDog(ID: number): Promise<import("../entities/dogs.entity").Dog>;
    deleteOne(ID: number): Promise<any>;
    create(dogData: any, file: any): Promise<{
        success: boolean;
        message: string;
    }>;
    updateDog(DogID: number, updateData: UpdateDogDto, file: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
