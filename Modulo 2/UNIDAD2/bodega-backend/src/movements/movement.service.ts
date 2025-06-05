import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movement } from './movement.entity';
import { CreateMovementDto } from './dto/create-movement.dto';
import { Product } from 'src/products/product.entity';
import { UpdateMovementDto } from './dto/update-movement.dto';

@Injectable()
export class MovementService {
  constructor(
    @InjectRepository(Movement)
    private readonly movementRepository: Repository<Movement>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(dto: CreateMovementDto): Promise<Movement> {
    const product = await this.productRepository.findOne({ where: { id: dto.productId } });
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    const movement = this.movementRepository.create({
      product,
      quantity: dto.quantity,
      type: dto.type,
    });

    return this.movementRepository.save(movement);
  }
  async update(id: string, dto: UpdateMovementDto): Promise<Movement> {
    const movement = await this.movementRepository.preload({
      id,
      ...dto,
    });
  
    if (!movement) {
      throw new NotFoundException(`Movement with ID ${id} not found`);
    }
  
    return this.movementRepository.save(movement);
  }

  findAll(): Promise<Movement[]> {
    return this.movementRepository.find();
  }

  async findOne(id: string): Promise<Movement> {
    const movement = await this.movementRepository.findOne({ where: { id } });
    if (!movement) {
      throw new NotFoundException('Movimiento no encontrado');
    }
    return movement;
  }

  async remove(id: string): Promise<void> {
    const movement = await this.movementRepository.findOne({ where: { id } });
    if (!movement) {
      throw new NotFoundException('Movimiento no encontrado');
    }
    await this.movementRepository.remove(movement);
  }
}
