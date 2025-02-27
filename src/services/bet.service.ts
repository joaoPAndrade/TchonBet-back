import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Bets } from '@prisma/client';


@Injectable()
export class BetService {
    constructor(private prisma: PrismaService) { }


    async create(bet: Bets): Promise<Bets> {

        const dataBet = await this.prisma.bets.create({
            data: bet,
        });
        if (dataBet) {
            await this.prisma.user.update({
                where: {
                    id: bet.idUser
                },
                data: {
                    wallet: { decrement: bet.amount }
                }
            })
        }
        return dataBet
    }
    async findAll(): Promise<Bets[]> {
        return this.prisma.bets.findMany();
    }

    async remove(id: number): Promise<void> {
        await this.prisma.bets.delete({ where: { id: Number(id) } });
    }

    async findByUser(id: number): Promise<Bets[]> {
        return this.prisma.bets.findMany({ where: { idUser: Number(id) } });
    }

    async findByGame(id: number): Promise<Bets[]> {
        return this.prisma.bets.findMany({ where: { idGame: Number(id) } });
    }

}