import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Games } from '@prisma/client';


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
        await this.prisma.games.delete({ where: { id: Number(id) } });
    }
    async finish(id: number, team: string): Promise<Games> {
        return this.prisma.games.update({ where: { id: Number(id) }, data: { isFinished: true, winnerTeam: team } });
    }

}