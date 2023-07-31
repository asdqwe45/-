import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto } from './DTO/create.dog.dto';
import { UpdateDogDto } from './DTO/update.dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAll(): Promise<any> {
    const dogs = await this.dogsRepository.find();
    const obj ={
      dogs,
    };
    return obj;
  } 
  async getOne(DogID: number): Promise<Dog> {
    const dogs = await this.dogsRepository.find();
    const obj = dogs.find(dog => dog.DogID === DogID);
    if(!obj) {
      throw new NotFoundException(`Dog with ID ${DogID} not found.`)
    }
    return obj;
  }
  async deleteOne(DogID: number): Promise<void> {
    this.getOne(DogID);
    this.dogsRepository.delete(DogID);
  } 

  async create(dogData : CreateDogDto): Promise<void> {
    await this.dogsRepository.save(dogData);
  }

  async update(DogID: number, updateData: UpdateDogDto): Promise<void> {
    await this.dogsRepository.update(DogID, updateData);
  }
}
