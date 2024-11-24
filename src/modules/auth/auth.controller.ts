<<<<<<< HEAD
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){

    }
    @Post ('register')
    registerUser(@Body()userObj : RegisterAuthDto){
        console.log(userObj);
        return userObj;
    }
    @Post('login')
    login(@Body() credenciales: LoginAuthDto){
        return this.authService.login(credenciales)

=======
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }
    @Post('register')
    registerUser(@Body() userObj : RegisterAuthDto){
        console.log(userObj);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto){
        return this.authService.login(credenciales)
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
    }
}
