import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
<<<<<<< HEAD
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private useRepository:Repository<User>){}
=======

@Injectable()
export class UsersService {
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
<<<<<<< HEAD
    return this.useRepository.find();
=======
    return `This action returns all users`;
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
