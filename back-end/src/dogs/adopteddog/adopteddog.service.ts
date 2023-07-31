import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Injectable()
export class AdoptedDogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAllAdoptedDogs( ):Promise<any>{
    const dogs = await this.dogsRepository.find();
    const obj = dogs.filter(dog => dog.Status === "adopted")
    return obj;
  }
  async getOneAdoptedDog(DogID: number): Promise<Dog> {
    let dogs = await this.dogsRepository.find();
    const dog = dogs.find((dog) => dog.DogID === DogID && dog.Status === "adopted"); 
    if(!dog) {
        throw new NotFoundException(`LostDog with ID ${DogID} not found.`);
    }
    return dog;
  }
  async deleteOne(DogID: number): Promise<void> {
    this.getOneAdoptedDog(DogID);
    this.dogsRepository.delete(DogID);
  } 

  async create(dogData : CreateDogDto): Promise<void> {
    dogData.Status = "stray";
    await this.dogsRepository.save(dogData);
  }
  
  async update(DogID: number, updateData: UpdateDogDto): Promise<void> {
    this.getOneAdoptedDog(DogID);
    await this.dogsRepository.update(DogID, updateData);
  }
}
