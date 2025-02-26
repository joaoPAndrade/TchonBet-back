import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'ID do usuário' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({ description: 'Nome do usuário' })
  @Column()
  name: string;

  @ApiProperty({ description: 'CPF do usuário', uniqueItems: true })
  @Column({ unique: true })
  cpf: string;

  @ApiProperty({ description: 'Email do usuário' })
  @Column()
  email: string;

  @ApiProperty({ description: 'Saldo da carteira do usuário' })
  @Column({ type: 'float', default: 0 })
  wallet: number;

  @ApiProperty({ description: 'Senha do usuário' })
  @Column()
  password: string;
}