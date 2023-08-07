"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const dogs_module_1 = require("./dogs/dog/dogs.module");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../ormconfig");
const config_1 = require("@nestjs/config");
const straydogs_module_1 = require("./dogs/straydogs/straydogs.module");
const lost_module_1 = require("./dogs/lostdogs/lost.module");
const adopteddog_module_1 = require("./dogs/adopteddog/adopteddog.module");
const deaddog_module_1 = require("./dogs/deaddog/deaddog.module");
const urgentdog_module_1 = require("./dogs/urgentdog/urgentdog.module");
const admin_module_1 = require("./admin/admin.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const cache_manager_1 = require("@nestjs/cache-manager");
const token_middleware_1 = require("../middleware/token.middleware");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const reservation_module_1 = require("./reservation/reservation.module");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(token_middleware_1.TokenMiddleware)
            .forRoutes({ path: 'dog', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '../../front-end/build')
            }),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                ttl: 60,
            }),
            dogs_module_1.DogsModule,
            straydogs_module_1.StrayDogsModule,
            lost_module_1.LostDogsModule,
            adopteddog_module_1.AdoptedDogsModule,
            deaddog_module_1.DeadDogsModule,
            config_1.ConfigModule.forRoot({
                envFilePath: ['./development.env'],
            }),
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            lost_module_1.LostDogsModule,
            adopteddog_module_1.AdoptedDogsModule,
            deaddog_module_1.DeadDogsModule,
            urgentdog_module_1.UrgentDogModule,
            admin_module_1.AdminModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            reservation_module_1.ReservationModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map