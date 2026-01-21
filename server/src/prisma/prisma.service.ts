// src/prisma/prisma.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  /* dummy implementation – no DB calls, no connect, no errors */
  async $connect(): Promise<void> {
    // vacío
  }

  async $disconnect(): Promise<void> {
    // vacío
  }
}