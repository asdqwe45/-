import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdoptedDogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAllAdoptedDogs( ):Promise<any>{
    const dogs = (await this.dogsRepository.find()).reverse();
    const obj = dogs.filter(dog => dog.Status === "Adopted")
    return obj;
  }
  async getOneAdoptedDog(DogID: number): Promise<Dog> {
    let dogs = await this.dogsRepository.find();
    const dog = dogs.find((dog) => dog.DogID === DogID && dog.Status === "Adopted"); 
    if(!dog) {
        throw new NotFoundException(`AdoptedDog with ID ${DogID} not found.`);
    }
    return dog;
  }
}
