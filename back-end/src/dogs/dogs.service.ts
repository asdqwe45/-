import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateDogDto } from './DTO/create.dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  private dogs : Dog[] = [];
  async getAll(): Promise<any> {
    const dogs = await this.dogsRepository.find();
    const obj ={
      "dogs": dogs,
    };
    return obj;
  }
  async getOne(DogID: string): Promise<any> {
    const dogs = await this.dogsRepository.find();
    console.log("getOne");
    const obj = {
      "dog": dogs.find(dog => dog.DogID === parseInt(DogID)),
    };
    return obj;
  }
  async deleteOne(DogID: string): Promise<any> {
    this.getOne(DogID);
    this.dogs = this.dogs.filter((dog) => dog.DogID === parseInt(DogID))
  }

  async create(dogData : CreateDogDto) {
    const id = dogData.DogID;
    await this.dogsRepository.save({id,...dogData});
  }

  update(DogID: string, updateData) {
    const dog = this.getOne(DogID);
    this.deleteOne(DogID);
    this.dogs.push({...dog, ...updateData});
  }
}
