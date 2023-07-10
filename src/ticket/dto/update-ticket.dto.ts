import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
    
    @IsString()
    @IsOptional()
    name:string;

    @IsString()
    @IsOptional()
    surnames: string;

   @IsArray()
   @IsOptional()
    package:any

    @IsString()
    @IsOptional()
    soldDate: string;

   @IsString()
   @IsOptional()
    seller: string;

    @IsString()
    @IsOptional()
    status:string;

    @IsNumber()
    @IsOptional()
    total: number;


    @IsNumber()
    @IsOptional()
    paid: number;
    
    @IsString()
    @IsOptional()
    seat: string;

}
