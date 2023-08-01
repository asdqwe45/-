"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const dogs_entity_1 = require("./src/dogs/entities/dogs.entity");
const user_entity_1 = require("./src/users/entities/user.entity");
dotenv.config();
const ormconfig = {
    type: 'mariadb',
    host: 'i9c106.p.ssafy.io',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'dog',
    entities: [dogs_entity_1.Dog, user_entity_1.User],
    synchronize: true,
};
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map