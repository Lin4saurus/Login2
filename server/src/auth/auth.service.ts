// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // constructor(private prisma: PrismaService) {}  <-- QUITA o comenta esta línea

  vlogin(email: string, password: string) {
    if (email === 'test@test.com' && password === '1234') {
      return { success: true, token: 'fake-jwt-token' };
    }
  
    return { success: false, error: 'Credenciales inválidas' };
  }
  
  
}