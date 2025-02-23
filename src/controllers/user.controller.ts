// filepath: /src/controllers/user.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Obter todos os usuários' })
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Obter um usuário pelo ID' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Criar um novo usuário' })
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'Atualizar um usuário pelo ID' })
  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<void> {
    return this.userService.update(id, user);
  }

  @ApiOperation({ summary: 'Remover um usuário pelo ID' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}