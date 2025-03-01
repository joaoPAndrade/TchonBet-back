import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Games, Bets } from '@prisma/client';


@Injectable()
export class GameService {
    constructor(private prisma: PrismaService) { }

    async create(game: Games): Promise<Games> {
        return this.prisma.games.create({
            data: {
                ...game,
                oddA: Number(game.oddA),
                oddB: Number(game.oddB),
            }
        });
    }
    async findAll(): Promise<Games[]> {
        return this.prisma.games.findMany();
    }
    async findOne(id: number): Promise<Games | null> {
        return this.prisma.games.findUnique({ where: { id: Number(id) } });
    }
    async update(id: number, game: Partial<Games>): Promise<Games> {
        return this.prisma.games.update({ where: { id: Number(id) }, data: game });
    }
    async remove(id: number): Promise<void> {
        const bets = await this.prisma.bets.findMany({
            where: {
                idGame: Number(id)
            }
        })

        await Promise.all(
            bets.map(bet =>
                this.prisma.bets.delete({
                    where: {
                        id: bet.id
                    }
                })
            )
        );

        await this.prisma.games.delete({ where: { id: Number(id) } });
    }
    async finish(id: number, team: string): Promise<Games> {
        const game = await this.prisma.games.update({ where: { id: Number(id) }, data: { isFinished: true, winnerTeam: team } });

        const bets = await this.prisma.bets.findMany({
            where: {
                idGame: Number(id)
            }
        })
        const teamWin = team === 'teamA'? game.teamA : game.teamB
        await Promise.all(
            bets.map(bet =>
                this.prisma.bets.update({
                    where: {
                        id: bet.id
                    },
                    data: {
                        status: teamWin === bet.team? 'win' : 'loss'
                    }
                })
            )
        );
        const betsWin = await this.prisma.bets.findMany({
            where: {
                status: 'win',
                idGame: Number(id)
            }
        })
        const mult: number = team === 'teamA' ? game.oddA : game.oddB;
        await Promise.all(
            betsWin.map(bet =>
                this.prisma.user.update({
                    where: { id: bet.idUser }, data: { wallet: { increment: bet.amount * mult } }
                })
            )
        );

        return game;
    }

    async findAllGamesNotFinalized(): Promise<Games[]> {
        return this.prisma.games.findMany({
            where: {
                isFinished: false
            }
        })
    }

}