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

  async getOne(DogID: number): Promise<any> {
    const dogs = await this.dogsRepository.find();
    console.log("getOne");
    const obj = {
      "data": dogs.find(dog => dog.DogID === DogID),
    };
    return obj;
  }

  async getDogs( page: number = 1, pageSize: number = 10):Promise<Dog[]>{
    if(isNaN(page)||isNaN(pageSize)){
      page=1;
      pageSize=10;
    }
    const skip = (page-1)*pageSize;
    return this.dogsRepository.find({skip,take: pageSize});
  }

  async deleteOne(DogID: number): Promise<any> {
    this.getOne(DogID);
    this.dogs = this.dogs.filter((dog) => dog.DogID === DogID)
  }

  async create(dogData : CreateDogDto) {
    const id = dogData.DogID;
    await this.dogsRepository.save({id,...dogData});
  }

  update(DogID: number, updateData) {
    const dog = this.getOne(DogID);
    this.deleteOne(DogID);
    this.dogs.push({...dog, ...updateData});
  }
}
