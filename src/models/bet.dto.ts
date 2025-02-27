import { ApiProperty } from '@nestjs/swagger';

interface Status {
    waiting: string;
    win: string;
    lose: string;
}

export class BetDto {
    @ApiProperty({ description: 'ID do usuário', example: 1 })
    idUser: number;

    @ApiProperty({ description: 'ID do jogo', example: 1 })
    idGame: number;

    @ApiProperty({ description: 'Valor da aposta', example: 100 })
    amount: number;

    @ApiProperty({ description: 'Data da aposta', example: '2021-09-15T00:00:00.000Z' })
    date: string;

    @ApiProperty({ description: 'Time da aposta', example: 'TimeA' })
    team: string;

    @ApiProperty({ description: 'Status da aposta', example: 'waiting' })
    status: Status;

    @ApiProperty({ description: 'Horario da Aposta', example: '10:00' })
    time: string;

    @ApiProperty({ description: 'bet odd', example: 1.5 })
    betOdd: number;

}