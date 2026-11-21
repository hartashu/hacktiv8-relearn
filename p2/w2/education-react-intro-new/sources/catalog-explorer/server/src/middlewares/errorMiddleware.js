export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const status = statusCode >= 500 ? 'error' : 'fail';
  const message = err.message || 'Terjadi kesalahan internal pada server.';

  return res.status(statusCode).json({
    status,
    message,
  });
};
