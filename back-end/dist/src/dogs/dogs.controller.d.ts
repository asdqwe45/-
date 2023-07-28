import { DogsService } from './dogs.service';
export declare class DogController {
    private readonly dogService;
    constructor(dogService: DogsService);
    private dogs;
    findAll(): Promise<any>;
    getOne(ID: string): Promise<any>;
    deleteOne(ID: string): Promise<any>;
    create(dogData: any): Promise<void>;
    patch(DogID: string, updateData: any): any;
}
