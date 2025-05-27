import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Product } from 'src/products/product.entity';

export enum MovementType {
  IN = 'IN',
  OUT = 'OUT',
}

@Entity('movements')
export class Movement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column()
  quantity: number;

  @Column({
    type: 'enum',
    enum: MovementType,
  })
  type: MovementType;

  @CreateDateColumn()
  createdAt: Date;
}
