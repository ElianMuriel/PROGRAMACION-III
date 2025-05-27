import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movement } from './movement.entity';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { Product } from 'src/products/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movement, Product])],
  providers: [MovementService],
  controllers: [MovementController],
})
export class MovementModule {}
