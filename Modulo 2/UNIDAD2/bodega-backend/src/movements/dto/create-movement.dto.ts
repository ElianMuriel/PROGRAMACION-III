import { IsEnum, IsNotEmpty, IsUUID, IsInt, Min } from 'class-validator';
import { MovementType } from '../movement.entity';

export class CreateMovementDto {
  @IsUUID()
  productId: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsEnum(MovementType)
  type: MovementType;
}