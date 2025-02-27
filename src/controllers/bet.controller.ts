import { Controller, Get, Post, Put, Delete, Body, Param  } from "@nestjs/common";
import { BetService  } from "../services/bet.service";
import { Bets } from "@prisma/client";
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from "@nestjs/swagger";
import { BetDto } from "src/models/bet.dto";
import { Bet } from "src/models/bet.model";


@ApiTags('bets')
@Controller('bets')
export class BetController {
    constructor (private readonly betService: BetService) {}

    @ApiOperation({ summary: 'Obter todas as apostas' })
    @ApiResponse({ status: 200, description: 'Lista de apostas retornada com sucesso.' })
    @Get()
    findAll(): Promise<Bets[]> {
        return this.betService.findAll();
    }

    @ApiOperation({summary: 'Criar uma nova aposta'})
    @ApiBody({type: BetDto})
    @ApiResponse({status: 201, description: 'Aposta criada com sucesso.'})
    @ApiResponse({status: 400, description: 'Dados inválidos.'
    })
    @Post('create')
    create(@Body() bet: Bets): Promise<Bets> {
        return this.betService.create(bet);
    }


    @ApiOperation({summary: 'Remover uma aposta pelo ID'})
    @ApiResponse({status: 200, description: 'Aposta removida com sucesso.'})
    @ApiResponse({status: 404, description: 'Aposta não encontrada.'})
    @Delete('delete/:id')
    remove(@Param('id') id:number): Promise<void> {
        return this.betService.remove(id);
    }

    @ApiOperation({summary: 'Buscar todas as apostas de um usuário'})
    @ApiResponse({status: 200, description: 'Apostas encontradas.'})
    @ApiResponse({status: 404, description: 'Apostas não encontradas.'})
    @Get('user/:id')
    findByUser(@Param('id') id:number): Promise<Bets[]> {
        return this.betService.findByUser(id);
    }

    @ApiOperation({summary: 'Buscar todas as apostas de um jogo'})
    @ApiResponse({status: 200, description: 'Apostas encontradas.'})
    @ApiResponse({status: 404, description: 'Apostas não encontradas.'})
    @Get('game/:id')
    findByGame(@Param('id') id:number): Promise<Bets[]> {
        return this.betService.findByGame(id);
    }   
    

}