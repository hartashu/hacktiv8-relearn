import { useCart } from '../context/CartContext';

export default function CartView({ onClose }) {
  const {
    cartItems,
    totalPrice,
    resetCart,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-700">
        <h2 className="text-xl font-bold text-slate-100">Keranjang Belanja</h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="py-8 text-center text-slate-400 text-sm">
          Keranjang belanjaanmu masih kosong.
        </div>
      ) : (
        <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60"
            >
              {/* Gambar Produk */}
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain bg-white rounded-lg p-1 shrink-0"
              />

              {/* Info Produk & Harga Satuan */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">${item.price}</p>
              </div>

              {/* Kontrol Kuantitas: [-] [qty] [+] */}
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1">
                <button
                  type="button"
                  onClick={() => decreaseQty(item.id)}
                  className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 rounded transition text-sm font-bold"
                >
                  -
                </button>
                <span className="text-xs font-semibold text-slate-200 min-w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => increaseQty(item.id)}
                  className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 rounded transition text-sm font-bold"
                >
                  +
                </button>
              </div>

              {/* Subtotal Item & Tombol Hapus */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-emerald-400 min-w-16 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  title="Hapus barang"
                  className="text-slate-500 hover:text-rose-400 transition text-sm p-1"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bagian Total & Tombol Checkout */}
      {cartItems.length > 0 && (
        <div className="pt-4 border-t border-slate-700 space-y-4">
          <div className="flex justify-between items-center text-slate-200">
            <span className="font-medium">Total Pembayaran:</span>
            <span className="text-2xl font-bold text-emerald-400">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              alert('Terima kasih! Pesanan sedang diproses.');
              resetCart();
              onClose();
            }}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition"
          >
            Checkout Sekarang
          </button>
        </div>
      )}
    </div>
  );
}
