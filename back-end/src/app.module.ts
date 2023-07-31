import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  ormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { StrayDogsModule } from './dogs/straydogs/straydogs.module';
import { LostDogsModule } from './dogs/lost/lost.module';

@Module({
  imports: [
    DogsModule,
    StrayDogsModule,
    ConfigModule.forRoot({
      envFilePath: ['./development.env'],
    }),
    TypeOrmModule.forRoot(ormconfig),
    LostDogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
