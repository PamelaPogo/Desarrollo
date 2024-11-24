<<<<<<< HEAD
import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import {IsNotEmpty} from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
    name:string;

}
=======
import {PartialType} from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";

    export class RegisterAuthDto extends PartialType(LoginAuthDto){
        @IsNotEmpty()
        name: string;
    }
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
