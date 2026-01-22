import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuthService {
  constructor(private db: DatabaseService) {}

  async findAllUsers() {
    const pool = this.db.getPool();
    const result = await pool.query('SELECT * FROM "User"');
    return result.rows;
  }

  async createUser(userData: { name: string; email: string; password: string }) {
    const pool = this.db.getPool();
    const result = await pool.query(
      'INSERT INTO "User" (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [userData.name, userData.email, userData.password]
    );
    return result.rows[0];
  }
}