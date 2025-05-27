import { IsEmail, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;

  @IsEmail()
  contactEmail: string;

  @IsString()
  phone: string;
}