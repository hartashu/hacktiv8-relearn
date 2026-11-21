import { ProductModel } from '../models/ProductModel.js';

export class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const { category } = req.query;

      const products = await ProductModel.findAll(category);

      return res.status(200).json({
        status: 'success',
        count: products.length,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);

      if (!product) {
        return res.status(404).json({
          status: 'fail',
          message: `Produk dengan ID ${id} tidak ditemukan.`,
        });
      }

      return res.status(200).json({
        status: 'success',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req, res, next) {
    try {
      const { title, price, category, description, image, stock } = req.body;

      if (!title || price === undefined || !category) {
        return res.status(400).json({
          status: 'fail',
          message: 'Field title, price, dan category wajib diisi.',
        });
      }

      const createdProduct = await ProductModel.create({
        title,
        price: Number(price),
        category,
        description: description || '',
        image: image || 'https://via.placeholder.com/300',
        stock: Number(stock) || 0,
      });

      return res.status(201).json({
        status: 'success',
        data: createdProduct,
      });
    } catch (error) {
      next(error);
    }
  }
}
