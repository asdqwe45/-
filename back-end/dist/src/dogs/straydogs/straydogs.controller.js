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
exports.StrayDogsController = void 0;
const common_1 = require("@nestjs/common");
const strayDogs_service_1 = require("./strayDogs.service");
const update_dog_dto_1 = require("../DTO/update.dog.dto");
let StrayDogsController = exports.StrayDogsController = class StrayDogsController {
    constructor(strayDogsService) {
        this.strayDogsService = strayDogsService;
    }
    getAllStrayDogs() {
        return this.strayDogsService.getAllStrayDogs();
    }
    getOneStrayDog(ID) {
        return this.strayDogsService.getOneStrayDog(ID);
    }
    deleteOne(ID) {
        return this.strayDogsService.deleteOne(ID);
    }
    create(dogData) {
        this.strayDogsService.create(dogData);
    }
    patch(DogID, updateData) {
        this.strayDogsService.update(DogID, updateData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StrayDogsController.prototype, "getAllStrayDogs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StrayDogsController.prototype, "getOneStrayDog", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StrayDogsController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StrayDogsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dog_dto_1.UpdateDogDto]),
    __metadata("design:returntype", void 0)
], StrayDogsController.prototype, "patch", null);
exports.StrayDogsController = StrayDogsController = __decorate([
    (0, common_1.Controller)('straydogs'),
    __metadata("design:paramtypes", [strayDogs_service_1.StrayDogsService])
], StrayDogsController);
//# sourceMappingURL=straydogs.controller.js.map