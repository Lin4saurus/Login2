// src/database/database.service.ts

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool, PoolConfig } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor() {
    const config: PoolConfig = {
      host: 'localhost',
      port: 5431, // puerto que usaste con Docker
      database: 'login2bd',
      user: 'koori',
      password: 'koori123',
    };

    this.pool = new Pool(config);
  }

  async onModuleInit() {
    await this.pool.connect();
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  getPool() {
    return this.pool;
  }
}