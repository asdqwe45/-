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
exports.DogsController = void 0;
const common_1 = require("@nestjs/common");
const dogs_service_1 = require("./dogs.service");
const update_dog_dto_1 = require("../DTO/update.dog.dto");
const typeorm_1 = require("typeorm");
let DogsController = exports.DogsController = class DogsController {
    constructor(dogService, dogsRepository) {
        this.dogService = dogService;
        this.dogsRepository = dogsRepository;
        this.dogs = [];
    }
    getOne(ID) {
        return this.dogService.getOne(ID);
    }
    async getDogs() {
        return this.dogService.getDogs();
    }
    deleteOne(ID) {
        return this.dogService.deleteOne(ID);
    }
    create(dogData) {
        this.dogService.create(dogData);
    }
    patch(DogID, updateData) {
        this.dogService.update(DogID, updateData);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogsController.prototype, "getDogs", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogsController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dog_dto_1.UpdateDogDto]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "patch", null);
exports.DogsController = DogsController = __decorate([
    (0, common_1.Controller)('dog'),
    __metadata("design:paramtypes", [dogs_service_1.DogsService,
        typeorm_1.Repository])
], DogsController);
//# sourceMappingURL=dogs.controller.js.map