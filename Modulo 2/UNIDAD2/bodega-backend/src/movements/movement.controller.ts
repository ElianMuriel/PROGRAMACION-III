import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MovementService } from './movement.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Movement } from './movement.entity';

@Controller('movements')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @Post()
  create(@Body() dto: CreateMovementDto): Promise<Movement> {
    return this.movementService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMovementDto,
  ): Promise<Movement> {
    return this.movementService.update(id, dto);
  }

  @Get()
  findAll(): Promise<Movement[]> {
    return this.movementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movement> {
    return this.movementService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.movementService.remove(id);
  }
}
