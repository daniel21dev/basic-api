import {Item as PrismaItem} from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';
import { IsDecimal, IsNumber, IsPositive, IsString, Length, MaxLength } from 'class-validator';

export class Item implements PrismaItem {
    @IsString()
    @Length(10)
    id: string; // id del artículo, clave única del producto. Dato alfanumérico de 10 caracteres. Nose permite actualizar.
    @IsString()
    @MaxLength(20)
    name: string; // nombre, nombre con el que se identifica al producto. Dato alfanumérico de hasta 20 caracteres. No se permite actualizar.
    @IsString()
    @MaxLength(200)
    description: string; // descripción, campo que contiene una descripción general del producto. Dato alfanumérico de hasta 200 caracteres. Se permite actualizar.
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 2,
    })
    @IsDecimal({
        decimal_digits: '2',
        force_decimal: false,
    })
    @IsPositive()
    price: Decimal; // precio, Dato numérico con dos decimales. No se permite actualizar.
    createdAt: Date;
    updatedAt: Date;
}
