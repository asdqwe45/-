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
exports.LostDogsController = void 0;
const common_1 = require("@nestjs/common");
const lost_service_1 = require("./lost.service");
const update_dog_dto_1 = require("../DTO/update.dog.dto");
let LostDogsController = exports.LostDogsController = class LostDogsController {
    constructor(lostDogsService) {
        this.lostDogsService = lostDogsService;
    }
    async getDogs(page = 1, pageSize = 100) {
        const lostDogs = await this.lostDogsService.getAllLostDogs();
        const totalItem = await this.lostDogsService.getAllLostDogsCount();
        if (isNaN(page) || isNaN(pageSize)) {
            page = 1;
            pageSize = totalItem;
        }
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const lostDog = lostDogs.slice(startIndex, endIndex);
        return { totalItem, lostDog };
    }
    getOneLostDog(ID) {
        return this.lostDogsService.getOneLostDog(ID);
    }
    deleteOne(ID) {
        return this.lostDogsService.deleteOne(ID);
    }
    create(dogData) {
        this.lostDogsService.create(dogData);
    }
    patch(DogID, updateData) {
        this.lostDogsService.update(DogID, updateData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], LostDogsController.prototype, "getDogs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LostDogsController.prototype, "getOneLostDog", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LostDogsController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LostDogsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dog_dto_1.UpdateDogDto]),
    __metadata("design:returntype", void 0)
], LostDogsController.prototype, "patch", null);
exports.LostDogsController = LostDogsController = __decorate([
    (0, common_1.Controller)('lostdog'),
    __metadata("design:paramtypes", [lost_service_1.LostDogsService])
], LostDogsController);
//# sourceMappingURL=lost.controller.js.map