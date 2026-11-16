import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

export default function Header() {
// { onReload, onOpenCart }
  const { totalItems } = useCart();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold text-sky-400">Catalog Explorer</h1>
        </Link>
        <p className="text-slate-400 text-sm mt-1">
          Menampilkan data katalog produk langsung dari server
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Badge Keranjang Belanja */}
        <Link
          to="/cart"
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3.5 py-2 rounded-lg text-sm font-medium transition"
        >
          <span className="text-slate-300">🛒 Keranjang</span>
          <span className="bg-sky-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
            {totalItems}
          </span>
        </Link>

        {/* <button
          onClick={onReload}
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 transition font-medium rounded-lg text-white text-sm cursor-pointer shadow-lg shadow-sky-500/10"
        >
          Muat Ulang
        </button> */}
      </div>
    </div>
  );
}
