import { verifyToken } from '../utils/authHelper.js';
import { AppError } from './errorMiddleware.js';

export function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError(
        'Akses ditolak. Token autentikasi tidak ditemukan.',
        401,
      );
    }

    const token = authHeader.split(' ')[1];

    const decodedUser = verifyToken(token);

    req.user = decodedUser;

    next();
  } catch (error) {
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError'
    ) {
      return next(
        new AppError('Token tidak valid atau sudah kedaluwarsa.', 401),
      );
    }

    next(error);
  }
}
