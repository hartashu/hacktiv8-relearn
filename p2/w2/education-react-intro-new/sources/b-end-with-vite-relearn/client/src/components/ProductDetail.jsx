import { useCart } from '../context/CartContext';

export default function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart();

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 object-contain"
        />
      </div>

      <div>
        <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">
          {product.category}
        </span>
        <h3 className="text-xl font-bold mt-1 text-slate-100">
          {product.title}
        </h3>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed max-h-40 overflow-y-auto pr-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
        <span className="text-2xl font-bold text-emerald-400">
          ${product.price}
        </span>
        <button
          type="button"
          onClick={() => {
            addToCart(product);
            onClose();
          }}
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-medium rounded-xl text-sm transition"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
