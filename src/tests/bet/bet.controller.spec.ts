import { Test, TestingModule } from '@nestjs/testing';
import { BetController } from 'src/controllers/bet.controller';
import { BetService } from 'src/services/bet.service';
import { Bets } from '@prisma/client';

describe('BetController', () => {
  let betController: BetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BetController],
      providers: [{ provide: BetService, useValue: {} }],
    }).compile();

    betController = module.get<BetController>(BetController);
  });

  it('should be defined', () => {
    expect(betController).toBeDefined();
  });
});