import { ApiProperty } from '@nestjs/swagger';


export class GameDto {
    @ApiProperty({ description: 'Time A', example: 'Time A' })
    teamA: string;

    @ApiProperty({ description: 'Time B', example: 'Time B' })
    teamB: string;

    @ApiProperty({ description: 'Odd do time A', example: 1.5 })
    oddA: number;

    @ApiProperty({ description: 'Odd do time B', example: 2.5 })
    oddB: number;

    @ApiProperty({ description: 'Data do jogo', example: '2021-09-15T00:00:00.000Z' })
    date: string;

    @ApiProperty({ description: 'Jogo finalizado', example: false })
    isFinished: boolean;

    @ApiProperty({ description: 'Time ganhador', example: 'Ainda não encerrado' })
    winnerTeam: string;

}