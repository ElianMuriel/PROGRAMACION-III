import { IsEnum, IsInt, IsOptional, IsUUID, Min } from 'class-validator';
import { MovementType } from '../movement.entity';

export class UpdateMovementDto {
  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @IsEnum(MovementType)
  type?: MovementType;
}
