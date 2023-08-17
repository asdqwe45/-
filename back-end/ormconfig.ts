import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { User } from 'src/user/entities/user.entity';
dotenv.config();
const ormconfig: TypeOrmModuleOptions = {
  type: 'mariadb', // 어떤 DB인가?
  host: 'i9c106.p.ssafy.io', // DB host
  port: 3306, // DB port
  username: 'test', // 사용자명
  password: 'test', // 사용자 패스워드
  database: 'dog', // 스키마 이름
  entities: [User, Dog, Reservation],
  synchronize: false, // 테이블을 생성할꺼냐 묻는 속성, 최초에 한번만 true
  timezone:'+09:00',
};

export default ormconfig;
