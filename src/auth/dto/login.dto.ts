import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'CPF do usuário', example: '12345678900' })
  cpf: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'senha123' })
  senha: string;
}