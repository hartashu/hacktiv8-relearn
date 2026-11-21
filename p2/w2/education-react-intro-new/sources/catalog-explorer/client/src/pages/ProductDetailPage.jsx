import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProductDetail() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          // `https://fakestoreapi.com/products/${id}`,
          `http://localhost:3000/api/products/${id}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error('Produk tidak ditemukan.');
        }

        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Gagal memuat detail produk.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductDetail();

    return () => controller.abort();
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => navigate('/')} />;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Tombol Navigasi Kembali */}
      <button
        type="button"
        onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya di riwayat browser
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition cursor-pointer"
      >
        ← Kembali
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 md:p-8">
        {/* Gambar Produk */}
        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-80">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Informasi & Aksi */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider rounded-full">
              {product.category}
            </span>

            <h1 className="text-2xl font-bold text-slate-100 leading-snug">
              {product.title}
            </h1>

            {/* <div className="flex items-center gap-2 text-sm text-amber-400">
              <span>★ {product.rating?.rate}</span>
              <span className="text-slate-500">
                ({product.rating?.count} ulasan)
              </span>
            </div> */}

            <div className="flex items-center gap-2 text-sm text-sky-400">
              <span>Stok tersedia: {product.stock} unit</span>
            </div>

            <p className="text-3xl font-extrabold text-emerald-400 pt-2">
              Rp. {Number(product.price).toLocaleString('id-ID')}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              {product.description}
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition cursor-pointer ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-sky-500 hover:bg-sky-600 text-white'
            }`}
          >
            {isAdded
              ? '✓ Berhasil Ditambahkan ke Keranjang'
              : '+ Tambah ke Keranjang'}
          </button>
        </div>
      </div>
    </div>
  );
}
