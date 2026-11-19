import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import errorHandler from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res
    .status(200)
    .json({ status: 'ok', message: 'Catalog API berjalan normal' });
});

app.use('/api/products', productRoutes);

app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Endpoint ${req.method} ${req.originalUrl} tidak ditemukan.`,
  });
});

app.use(errorHandler);

export default app;
