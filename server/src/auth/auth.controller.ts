// src/auth/auth.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} // 👈 Inyección

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.vlogin(body.email, body.password);
  }
  
  
  
}