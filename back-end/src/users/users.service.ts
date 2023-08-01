import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getAll(): Promise<any> {
    const dogs = await this.usersRepository.find();
    const obj ={
      dogs,
    };
    return obj;
  }
  async getOne(DogID: number): Promise<User> {
    const dogs = await this.usersRepository.find();
    const obj = dogs.find(dog => dog.DogID === DogID);
    if(!obj) {
      throw new NotFoundException(`Dog with ID ${DogID} not found.`)
    }
    return obj;
  }
  async deleteOne(DogID: number): Promise<void> {
    this.getOne(DogID);
    this.usersRepository.delete(DogID);
  } 

  async create(dogData : CreateDogDto): Promise<void> {
    await this.usersRepository.save(dogData);
  }

  async update(DogID: number, updateData: UpdateDogDto): Promise<void> {
    await this.usersRepository.update(DogID, updateData);
  }
}
