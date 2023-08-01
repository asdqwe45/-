"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsService = void 0;
const common_1 = require("@nestjs/common");
const dogs_entity_1 = require("../entities/dogs.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DogsService = exports.DogsService = class DogsService {
    constructor(dogsRepository) {
        this.dogsRepository = dogsRepository;
        this.dogs = [];
    }
    async getOne(DogID) {
        const dogs = await this.dogsRepository.find();
        const obj = {
            "dog": dogs.find(dog => dog.DogID === DogID),
        };
        return obj;
    }
    async getDogs(page = 1, pageSize = 10) {
        if (isNaN(page) || isNaN(pageSize)) {
            page = 1;
            pageSize = 10;
        }
        const skip = (page - 1) * pageSize;
        return this.dogsRepository.find({ skip, take: pageSize });
    }
    async deleteOne(DogID) {
        this.getOne(DogID);
        this.dogs = this.dogs.filter((dog) => dog.DogID === DogID);
    }
    async create(dogData) {
        const id = dogData.DogID;
        await this.dogsRepository.save({ id, ...dogData });
    }
    update(DogID, updateData) {
        const dog = this.getOne(DogID);
        this.deleteOne(DogID);
        this.dogs.push({ ...dog, ...updateData });
    }
};
exports.DogsService = DogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(dogs_entity_1.Dog)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DogsService);
//# sourceMappingURL=dogs.service.js.map