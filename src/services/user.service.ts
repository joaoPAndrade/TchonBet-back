// src/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.senha, 10);
    return this.prisma.user.create({
      data: {
        ...user,
        senha: hashedPassword,
      },
    });
  }

  async validateUser(cpf: string, senha: string): Promise<User | null> {
    const user = await this.findByCPF(cpf);
    if (user && (await bcrypt.compare(senha, user.senha))) {
      return user;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByCPF(cpf: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { cpf } });
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: user });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}