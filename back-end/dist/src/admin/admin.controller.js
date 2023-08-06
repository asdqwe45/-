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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const dogs_service_1 = require("../dogs/dog/dogs.service");
const user_service_1 = require("../user/user.service");
let AdminController = exports.AdminController = class AdminController {
    constructor(dogService, userService) {
        this.dogService = dogService;
        this.userService = userService;
    }
    async getDogs(page = 1, pageSize = 100) {
        const Dogs = await this.dogService.getDogs();
        const totalItem = await this.dogService.getDogsCount();
        if (isNaN(page) || isNaN(pageSize)) {
            page = 1;
            pageSize = totalItem;
        }
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const Dog = Dogs.slice(startIndex, endIndex);
        return { totalItem, Dog };
    }
    async getUser(page = 1, pageSize = 100) {
        const users = (await this.userService.findAll()).reverse();
        const totalItem = await this.userService.findAllCount();
        if (isNaN(page) || isNaN(pageSize)) {
            page = 1;
            pageSize = totalItem;
        }
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const user = users.slice(startIndex, endIndex);
        return { totalItem, user };
    }
    getOneUser(ID) {
        return this.userService.findOne(ID);
    }
};
__decorate([
    (0, common_1.Get)('/dogs'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getDogs", null);
__decorate([
    (0, common_1.Get)('/user'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getOneUser", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('api/admin'),
    __metadata("design:paramtypes", [dogs_service_1.DogsService,
        user_service_1.UserService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map