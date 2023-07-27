import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  ormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DogsModule,
    ConfigModule.forRoot({
      envFilePath: ['./development.env'],
    }),
    TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
