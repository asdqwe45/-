import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Injectable()
export class DeadDogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAllAdoptedDogs( ):Promise<any>{
    const dogs = await this.dogsRepository.find();
    const obj = dogs.filter(dog => dog.Status === "Dead")
    return obj;
  }
  async getOneAdoptedDog(DogID: number): Promise<Dog> {
    let dogs = await this.dogsRepository.find();
    const dog = dogs.find((dog) => dog.DogID === DogID && dog.Status === "Dead"); 
    if(!dog) {
        throw new NotFoundException(`DeadDog with ID ${DogID} not found.`);
    }
    return dog;
  }
}
