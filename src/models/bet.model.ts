import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

interface Status {
    waiting: string;
    win: string;
    lose: string;
}

@Entity('bets')
export class Bet {
    @ApiProperty({ description: 'ID da aposta' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'ID do usuário' })
    @Column()
    idUser: number;

    @ApiProperty({ description: 'ID do jogo' })
    @Column()
    idGame: number;

    @ApiProperty({ description: 'Valor da aposta' })
    @Column()
    amount: number;

    @ApiProperty({ description: 'Data da aposta' })
    @Column()
    date: string;

    @ApiProperty({ description: 'Time da aposta' })
    @Column()
    team: string;

    @ApiProperty({ description: 'Status da aposta' })
    @Column({ default: 'waiting' })
    status: Status;

    @ApiProperty({ description: '10:00' })
    @Column({ default: '10:00' })
    time: string;

    @ApiProperty({ description: 'valor da odd no momento da aposta' })
    @Column({ default: 1.5 })
    betOdd: number;
    
}