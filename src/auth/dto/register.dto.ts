import { IsArray, IsEmail, IsString, MinLength, isString } from "class-validator";



export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    name: string;
    
    @MinLength(6)
    password: string;


    @IsString()
    roles: string;

}