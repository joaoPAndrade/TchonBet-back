import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: string, user: User): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}