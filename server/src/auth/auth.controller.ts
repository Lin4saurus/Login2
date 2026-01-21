import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor (private readonly AuthService: AuthService) {}


@Get('login')
LogIn(){
    return "waos"
}

@Get('sign-up')
contenido1(){
    return this.AuthService.buscaUsers()
}

}
