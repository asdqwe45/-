import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAll(): Promise<any>;
    getOne(DogID: number): Promise<User>;
    deleteOne(DogID: number): Promise<void>;
    create(dogData: CreateDogDto): Promise<void>;
    update(DogID: number, updateData: UpdateDogDto): Promise<void>;
}
