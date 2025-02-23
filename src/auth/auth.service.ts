import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(cpf: string, senha: string): Promise<User | null> {
    return this.userService.validateUser(cpf, senha);
  }

  async login(user: User) {
    const payload = { cpf: user.cpf, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}