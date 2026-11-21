import { db } from '../prisma/db.js';

export class ProductModel {
  static async findAll(category) {
    if (category) {
      return await db.orm.public.Product.where((p) =>
        p.category.ilike(category),
      ).all();
    }

    return await db.orm.public.Product.all();
  }

  static async findById(id) {
    return await db.orm.public.Product.where({ id: Number(id) }).first();
  }

  static async create(newProductData) {
    return await db.orm.public.Product.create({
      title,
      price: Number(price),
      category,
      description: description || '',
      image: image || 'https://via.placeholder.com/300',
      stock: Number(stock) || 0,
    });
  }
}
