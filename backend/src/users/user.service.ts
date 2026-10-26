import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/users.entity.js';
import { Repository } from 'typeorm';
import { OmitType } from '@nestjs/mapped-types';
import { UpdateUserDto } from '../users/dto/update-user-dto.js';
import { rmSync } from 'fs';
import { GoogleAuthDto } from '../auth/dto/google.dto.js';
import { CreateUserInput, UserResponse } from './interfaces/user.interface.js';

Injectable();
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUser: CreateUserInput): Promise<UserResponse> {
    const user = this.userRepository.create(createUser);
    return await this.userRepository.save(user);
  }

  async createWithGoogle(createUser : GoogleAuthDto) : Promise<UserResponse> {
    const user = this.userRepository.create(createUser);
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<UserResponse | null> {
    return await this.userRepository.findOne({
      where : {
        id
      },
      select: {
        id : true,
        username : true,
        email : true,
        createdAt : true,
        password : false,
        role : true
      }
    });

  }


  async findOneSensitiveByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async findOneByGoogleID(googleId: string): Promise<UserResponse | null> {
    const user =  await this.userRepository.findOneBy({ googleId });
    if (!user) return null
    
    const {password, ...rest} = user;

    return rest

  }
  

  async findOneByEmail(email: string): Promise<UserResponse | null> {
    return await this.userRepository.findOneBy({ email });
  }

   async findOneSensitiveByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ username });
  }

  async findAll(id: number): Promise<UserResponse[] | null> {
    return await this.userRepository.find();
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponse> {
    const user = await this.findOne(id);
    if (!user)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'User not found',
      });

    const updatedUser = { ...user, ...updateUserDto };
    await this.userRepository.update(id, updatedUser);
    return updatedUser;
  }

  async delete(id: number): Promise<UserResponse> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
    return this.userRepository.remove(user);
  }
}
