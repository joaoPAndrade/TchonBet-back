// src/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    
    user.birthDate = new Date(user.birthDate);

    return this.prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  async addWallet(id: number, value: number): Promise<User> {
    return this.prisma.user.update({
      where: { id:Number(id) },
      data: {
        wallet: {
          increment: value,
        },
      },
    });
  }

  async validateUser(cpf: string, senha: string): Promise<User | null> {
    const user = await this.findByCPF(cpf);

    if (user && (await bcrypt.compare(senha, user.password))) {
      return user;
    }

    return null;
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {

    return this.prisma.user.findUnique({ where: { id:Number(id) } });
  }

  async findByCPF(cpf: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { cpf } });
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id:Number(id) }, data: user });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id:Number(id) } });
  }
}