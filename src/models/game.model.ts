import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('games')
export class Game {
    @ApiProperty({ description: 'ID do jogo' })
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty({ description: 'Time A' })
    @Column()
    teamA: string;
    
    @ApiProperty({ description: 'Time B' })
    @Column()
    teamB: string;
    
    @ApiProperty({ description: 'Odd do time A' })
    @Column()
    oddA: number;
    
    @ApiProperty({ description: 'Odd do time B' })
    @Column()
    oddB: number;
    
    @ApiProperty({ description: 'Data do jogo' })
    @Column()
    date: Date;
    
    @ApiProperty({ description: 'Jogo finalizado' })
    @Column({ default: false })
    isFinished: boolean;
    
    @ApiProperty({ description: 'Time ganhador' })
    @Column({ default: 'Ainda não encerrado' })
    winnerTeam: string;
}