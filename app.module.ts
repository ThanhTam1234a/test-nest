// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './src/users/users.controller';
import { UsersService } from './src/users/users.service';
import { UsersModule } from './src/users/users.module';
import { StoreModule } from './src/modules/store/store.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts ,.js}'],
      synchronize: true,      
    }),
    UsersModule, // Đưa UsersModule vào imports của AppModule
    // StoreModule,
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
