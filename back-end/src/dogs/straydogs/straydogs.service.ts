import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Injectable()
export class StrayDogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAllStrayDogs( ):Promise<any>{
    const dogs = await this.dogsRepository.find();
    const obj = dogs.filter(dog => dog.Status === "stray")
    return obj;
  }
  async getOneStrayDog(DogID: number): Promise<Dog> {
    let dogs = await this.dogsRepository.find();
    const dog = dogs.find((dog) => dog.DogID === DogID && dog.Status === "stray"); 
    if(!dog) {
        throw new NotFoundException(`StrayDog with ID ${DogID} not found.`)
    }
    return dog; 
  }
  async deleteOne(DogID: number): Promise<void> {
    this.getOneStrayDog(DogID);
    this.dogsRepository.delete(DogID);
  } 

  async create(dogData : CreateDogDto): Promise<void> {
    dogData.Status = "stray";
    await this.dogsRepository.save(dogData);
  }

  async update(DogID: number, updateData: UpdateDogDto): Promise<void> {
    this.getOneStrayDog(DogID);
    await this.dogsRepository.update(DogID, updateData);
  }
}
