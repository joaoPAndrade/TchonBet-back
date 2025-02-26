import { Controller, Get, Post, Put, Delete, Body, Param  } from "@nestjs/common";
import { GameService } from "../services/game.service";
import { Games } from "@prisma/client";
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from "@nestjs/swagger";
import { GameDto } from "src/models/game.dto";
import { Game } from "src/models/game.model";



@ApiTags('games')
@Controller('api/games')
export class GameController {
    constructor (private readonly gameService: GameService) {}


    @ApiOperation({ summary: 'Obter todos os jogos' })
    @ApiResponse({ status: 200, description: 'Lista de jogos retornada com sucesso.' })
    @Get()
    findAll(): Promise<Games[]> {
        return this.gameService.findAll();
    }


    @ApiOperation({summary: 'Criar um novo jogo'})
    @ApiBody({type: GameDto})
    @ApiResponse({status: 201, description: 'Jogo criado com sucesso.'})
    @ApiResponse({status: 400, description: 'Dados inválidos.'})
    @Post('create')
    create(@Body() game: Games): Promise<Games> {
        return this.gameService.create(game);
    }

    @ApiOperation({summary: 'Atualizar um jogo pelo ID'})
    @ApiBody({type: GameDto})
    @ApiResponse({status: 200, description: 'Jogo atualizado com sucesso.'})
    @ApiResponse({status: 404, description: 'Jogo não encontrado.'})
    @Put('update/:id')
    update(@Param('id') id:number ,  @Body() game: Partial<Games>): Promise<Games> {
        return this.gameService.update(id, game);
    }

    @ApiOperation({summary: 'Remover um jogo pelo ID'})
    @ApiResponse({status: 200, description: 'Jogo removido com sucesso.'})
    @ApiResponse({status: 404, description: 'Jogo não encontrado.'})
    @Delete('delete/:id')
    remove(@Param('id') id:number): Promise<void> {
        return this.gameService.remove(id);
    }

    @ApiOperation({summary: 'Definir um jogo como finalizado'})
    @ApiResponse({status: 200, description: 'Jogo finalizado com sucesso.'})
    @ApiResponse({status: 404, description: 'Jogo não encontrado.'})
    @Put('finish/:id')
    finish(@Param('id') id:number, @Body('team') team: string ): Promise<Game> {
        return this.gameService.finish(id, team);
    }

    @ApiOperation({summary: 'Obter um jogo pelo ID'})
    @ApiResponse({status: 200, description: 'Jogo encontrado.'})
    @ApiResponse({status: 404, description: 'Jogo não encontrado.'})
    @Get(':id')
    findOne(@Param('id') id:number): Promise<Games | null> {
        return this.gameService.findOne(id);
    }

}

