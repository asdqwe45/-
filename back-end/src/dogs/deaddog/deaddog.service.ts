import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeadDogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAllDeadDogs( ):Promise<any>{
    const dogs = (await this.dogsRepository.find()).reverse();
    const obj = dogs.filter(dog => dog.Status === "Dead")
    return obj;
  }
  async getAllDeadDogsCount(){
    const totalItem = this.dogsRepository.count({where:{Status:"Dead"}});
    return totalItem;
  }
  async getOneDeadDog(DogID: number): Promise<Dog> {
    let dogs = await this.dogsRepository.find();
    const dog = dogs.find((dog) => dog.DogID === DogID && dog.Status === "Dead"); 
    if(!dog) {
        throw new NotFoundException(`DeadDog with ID ${DogID} not found.`);
    }
    return dog;
  }
}
