// src/models/OrderModel.js
import { db } from '../prisma/db.js';
import { AppError } from '../middlewares/errorMiddleware.js';

export class OrderModel {
  static async createWithItems({ userId, address, paymentMethod, items }) {
    return await db.transaction(async (tx) => {
      let totalAmount = 0;
      const preparedItems = [];

      // 1. Cek stok & harga asli tiap produk dari database
      for (const item of items) {
        const product = await tx.orm.public.Product.where({
          id: Number(item.productId),
        }).first();

        if (!product) {
          throw new AppError(
            `Produk dengan ID ${item.productId} tidak ditemukan.`,
            404,
          );
        }

        if (product.stock < item.quantity) {
          throw new AppError(
            `Stok untuk "${product.title}" tidak mencukupi (tersisa ${product.stock}).`,
            400,
          );
        }

        const subtotal = product.price * item.quantity;
        totalAmount += subtotal;

        preparedItems.push({
          productId: product.id,
          quantity: item.quantity,
          priceAtTime: product.price,
          newStock: product.stock - item.quantity,
        });
      }

      // 2. Buat baris induk di tabel orders
      const newOrder = await tx.orm.public.Order.create({
        userId: Number(userId),
        address,
        paymentMethod,
        totalAmount,
      });

      // 3. Buat semua baris detail di tabel order_items sekaligus
      const orderItemsPayload = preparedItems.map((item) => ({
        orderId: newOrder.id,
        productId: item.productId,
        quantity: item.quantity,
        priceAtTime: item.priceAtTime,
      }));

      await tx.orm.public.OrderItem.createAll(orderItemsPayload);

      // 4. Kurangi stok masing-masing produk di tabel products
      for (const item of preparedItems) {
        await tx.orm.public.Product.where({ id: item.productId }).update({
          stock: item.newStock,
        });
      }

      return newOrder;
    });
  }

  static async findByUserId(userId) {
    return await db.orm.public.Order.where({ userId: Number(userId) })
      .include('orderItems', (item) => item.include('product'))
      .orderBy((o) => o.createdAt.desc())
      .all();
  }
}
