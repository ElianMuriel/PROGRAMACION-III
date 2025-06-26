import { IsString, IsArray, IsNotEmpty, IsEmail, IsDate, IsNumber, IsOptional } from 'class-validator';
import { Contenido } from '../schemas/curso.schema';

export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsDate()
  fecha_inicio: Date;

  @IsDate()
  fecha_fin: Date;

  @IsString()
  @IsNotEmpty()
  nivel: string;

  @IsArray()
  @IsNotEmpty()
  requisitos: string[];

  @IsNumber()
  precio: number;

  @IsNotEmpty()
  instructor: { nombre: string; email: string };

  @IsNumber()
  calificacion_promedio: number;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsArray()
  @IsNotEmpty()
  contenidos: Contenido[];
}
