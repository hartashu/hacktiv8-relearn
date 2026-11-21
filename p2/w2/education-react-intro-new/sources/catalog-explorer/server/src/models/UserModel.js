import { db } from '../prisma/db.js';

export class UserModel {
  static async findByEmail(email) {
    return db.orm.public.User.where({ email }).first();
  }

  static async findById(id) {
    return db.orm.public.User.where({ id: Number(id) }).first();
  }

  static async create({ fullName, email, passwordHash, role = 'CUSTOMER' }) {
    return db.orm.public.User.create({ fullName, email, passwordHash, role });
  }
}
