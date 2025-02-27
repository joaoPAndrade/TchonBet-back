import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from 'src/controllers/game.controller';
import { GameService } from 'src/services/game.service';
import { Games } from '@prisma/client';

describe('GameController', () => {
  let gameController: GameController;
  let gameService: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [{
        provide: GameService,
        useValue: {
          findAll: jest.fn(),
          create: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
          finish: jest.fn(),
          findOne: jest.fn(),
          findAllGamesNotFinalized: jest.fn(),
        },
      }],
    }).compile();

    gameController = module.get<GameController>(GameController);
    gameService = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(gameController).toBeDefined();
  });
});
