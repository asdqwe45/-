import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  private dogs: Dog[] = [];
  findAll(): Promise<Dog[]> {
    return this.dogsRepository.find();
  }

  findOne(DogID: number): Dog{
    const dog = this.dogs.find((dog) => dog.DogID === DogID);
    if(!dog){
      throw new NotFoundException(`dog with ID ${DogID} Not Found.`)
    }
    return dog;
  }
}
