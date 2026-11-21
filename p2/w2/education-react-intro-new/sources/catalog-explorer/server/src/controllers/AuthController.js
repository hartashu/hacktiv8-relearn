import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/UserModel.js';
import { AppError } from '../middlewares/errorMiddleware.js';
import {
  comparePassword,
  generateToken,
  hashPassword,
} from '../utils/authHelper.js';

export class AuthController {
  static async register(req, res, next) {
    try {
      const fullName = req.body.fullName?.trim();
      const email = req.body.email?.trim().toLowerCase();
      const { password } = req.body;

      if (!fullName || !email || !password) {
        throw new AppError(
          'Nama lengkap, email, dan password wajib diisi.',
          400,
        );
      }

      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        throw new AppError(
          'Email sudah terdaftar. Silakan gunakan email lain.',
          409,
        );
      }

      const passwordHash = await hashPassword(password);
      const newUser = await UserModel.create({
        fullName,
        email,
        passwordHash,
      });

      return res.status(201).json({
        status: 'success',
        data: {
          id: newUser.id,
          fullName: newUser.fullName,
          email: newUser.email,
          role: newUser.role,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const email = req.body.email?.trim().toLowerCase();
      const { password } = req.body;

      if (!email?.trim() || !password) {
        throw new AppError('Email dan password wajib diisi.', 400);
      }

      const user = await UserModel.findByEmail(email);
      if (!user) {
        throw new AppError('Email atau password salah.', 401);
      }

      const isPasswordValid = await comparePassword(
        password,
        user.passwordHash,
      );
      if (!isPasswordValid) {
        throw new AppError('Email atau password salah.', 401);
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return res.status(200).json({
        status: 'success',
        data: {
          token,
          user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
