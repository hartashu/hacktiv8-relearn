const errorHandler = (err, req, res, next) => {
  console.error('Server Error:', err);

  return res.status(500).json({
    status: 'error',
    message: 'Terjadi kesalahan internal pada server.',
  });
};

export default errorHandler;
