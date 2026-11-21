import { OrderModel } from '../models/OrderModel.js';

export class OrderController {
  static async createOrder(req, res, next) {
    try {
      const userId = req.user.id;
      const address = req.body.address?.trim();
      const paymentMethod = req.body.paymentMethod?.trim();
      const { items } = req.body;

      if (!address || !paymentMethod) {
        throw new AppError(
          'Alamat pengiriman dan metode pembayaran wajib diisi.',
          400,
        );
      }

      if (!Array.isArray(items) || items.length === 0) {
        throw new AppError('Keranjang belanja tidak boleh kosong.', 400);
      }

      const newOrder = await OrderModel.createWithItems({
        userId,
        address,
        paymentMethod,
        items,
      });

      return res.status(201).json({
        status: 'success',
        data: newOrder,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMyOrders(req, res, next) {
    try {
      const userId = req.user.id;
      const orders = await OrderModel.findByUserId(userId);

      return res.status(200).json({
        status: 'success',
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  }
}
