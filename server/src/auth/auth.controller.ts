import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {


@Get('login')
LogIn(){
    return "waos"
}

@Get('signin')
SignIn(){
    return "olv"
}


}
