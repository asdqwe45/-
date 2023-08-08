import { Injectable } from '@nestjs/common';
import { Dog } from '../dogs/entities/dogs.entity'; // Dog 엔터티의 경로를 업데이트해야 합니다.
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>
  ) {}

  async updateImage(dogId: number, path: string): Promise<void> {
    await this.dogRepository.update(dogId, { image: path });
  }

  async findImagePathByDogId(dogId: number): Promise<string> {
    const dog = await this.dogRepository.findOne(dogId);
    return dog.image;
  }
}
