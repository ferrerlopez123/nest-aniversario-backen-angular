import { IS_EMPTY, IsArray, IsNumber, IsString } from "class-validator";
import { Paquete } from "../entities/ticket.entity";

export class CreateTicketDto {
    
    @IsString()
    name:string;

    @IsString()
    surnames: string;

   @IsArray()
    package:any

    @IsString()
    soldDate: string;

   @IsString()
    seller: string;

    @IsString()
    status:string;

    @IsNumber()
    total: number;


    @IsNumber()
    paid: number;
    
    @IsString()
    seat: string;

}
