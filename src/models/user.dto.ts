import { ApiProperty } from '@nestjs/swagger';


export class UserDto {

  @ApiProperty({ description: 'Nome do usuário', example: 'João Silva' })
  name: string;

  @ApiProperty({ description: 'CPF do usuário', example: '12345678900' })
  cpf: string;

  @ApiProperty({ description: 'Email do usuário', example: 'joao@example.com' })
  email: string;

  @ApiProperty({ description: 'Saldo da carteira do usuário', example: 100.0 })
  wallet: number;

  @ApiProperty({ description: 'Senha do usuário', example: 'senha123' })
  password: string;

  @ApiProperty({ description: 'Data de nascimento do usuário', example: '1990-01-01T00:00:00.000Z' })
  birthdate: string;

}