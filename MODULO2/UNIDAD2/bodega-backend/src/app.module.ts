import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common'; // <- ESTA LÍNEA ES NECESARIA
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { MovementModule } from './movements/movement.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // para desarrollo
    }),
    // aquí agregarás tus módulos
    ProductsModule,
    SuppliersModule,
    MovementModule,
    UsersModule,
    CategoriesModule,
  ],
})
export class AppModule {}
