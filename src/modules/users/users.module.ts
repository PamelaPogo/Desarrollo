import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
=======

@Module({
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
