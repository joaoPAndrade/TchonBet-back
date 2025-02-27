import { Test, TestingModule } from '@nestjs/testing';
import { BetController } from 'src/controllers/bet.controller';
import { BetService } from 'src/services/bet.service';
import { Bets } from '@prisma/client';

describe('BetController', () => {
    let controller: BetController;
    let service: BetService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BetController],
            providers: [
                {
                    provide: BetService,
                    useValue: {
                        findAll: jest.fn().mockResolvedValue([]),
                        create: jest.fn().mockResolvedValue({}),
                        remove: jest.fn().mockResolvedValue(undefined),
                        findByUser: jest.fn().mockResolvedValue([]),
                        findByGame: jest.fn().mockResolvedValue([]),
                    },
                },
            ],
        }).compile();

        controller = module.get<BetController>(BetController);
        service = module.get<BetService>(BetService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of bets', async () => {
            const result: Bets[] = [];
            jest.spyOn(service, 'findAll').mockResolvedValue(result);

            expect(await controller.findAll()).toBe(result);
        });
    });

    describe('create', () => {
        it('should create a new bet', async () => {
            const bet: Bets = { id: 1, idUser: 1, idGame: 1, amount: 100, date: '10-10-2010', status: 'waiting', team: 'TeamA', time: '10-10-2010', betOdd: 1.5 };
            jest.spyOn(service, 'create').mockResolvedValue(bet);

            expect(await controller.create(bet)).toBe(bet);
        });
    });

    describe('remove', () => {
        it('should remove a bet', async () => {
            const id = 1;
            jest.spyOn(service, 'remove').mockResolvedValue(undefined);

            expect(await controller.remove(id)).toBeUndefined();
        });
    });

    describe('findByUser', () => {
        it('should return an array of bets for a user', async () => {
            const result: Bets[] = [];
            const id = 1;
            jest.spyOn(service, 'findByUser').mockResolvedValue(result);

            expect(await controller.findByUser(id)).toBe(result);
        });
    });

    describe('findByGame', () => {
        it('should return an array of bets for a game', async () => {
            const result: Bets[] = [];
            const id = 1;
            jest.spyOn(service, 'findByGame').mockResolvedValue(result);

            expect(await controller.findByGame(id)).toBe(result);
        });
    });
});