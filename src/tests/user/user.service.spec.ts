import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../services/user.service';
import { PrismaService } from '../../prisma.service';

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findMany: jest.fn().mockResolvedValue([]),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('deve chamar findAll e retornar um array de usuários', async () => {
    await expect(userService.findAll()).resolves.toEqual([]);
    expect(prismaService.user.findMany).toHaveBeenCalled();
  });
});
