import { IsString } from "class-validator";

export class CreateSellerDto {
    
    @IsString()
    name:string;
}
