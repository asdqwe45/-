import { DogsService } from './dogs.service';
import { Dog } from '../entities/dogs.entity';
import { EndpointService } from 'src/endpoint/endpoint.service';
export declare class DogsController {
    private readonly dogService;
    private readonly endpointService;
    constructor(dogService: DogsService, endpointService: EndpointService);
    private dogs;
    getDogs(req: any): Promise<{
        dog: Dog[];
    }>;
}
