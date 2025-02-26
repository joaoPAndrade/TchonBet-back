import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';
import { ApiTags, ApiOperation, ApiQuery, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/models/user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Obter todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Obter um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Obter um usuário pelo CPF' })
  @ApiParam({ name: 'cpf', description: 'CPF do usuário', type: String })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Get('/cpf/:cpf')
  findByCPF(@Param('cpf') cpf: string): Promise<User | null> {
    return this.userService.findByCPF(cpf);
  }

  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'Atualizar um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
    return this.userService.update(id, user);
  }

  @ApiOperation({ summary: 'Remover um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }


  @ApiOperation({ summary: 'Adicionar valor na carteira do usuário' })
  @ApiBody({ schema: { properties: { userId: { type: 'number', description: 'ID do usuário' }, value: { type: 'number', description: 'Valor a ser adicionado' } } } })
  @ApiResponse({ status: 200, description: 'Valor adicionado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Post('/addWallet')
  addWallet(@Body() body: { userId: number, value: number }): Promise<User> {
    return this.userService.addWallet(body.userId, body.value);
  }
}