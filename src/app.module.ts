import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { GameController } from './controllers/game.controller';
import { GameService } from './services/game.service';
import { BetController } from './controllers/bet.controller';
import { BetService } from './services/bet.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [UserController, GameController, BetController],
  providers: [UserService, PrismaService, GameService, BetService],
  imports: [AuthModule],
})
export class AppModule {}