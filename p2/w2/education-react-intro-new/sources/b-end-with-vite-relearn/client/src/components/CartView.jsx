import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

export default function CartView({ onClose }) {
  const { cartItems, totalPrice, increaseQty, decreaseQty, removeItem } =
    useCart();

  const [step, setStep] = useState('cart');
  const [orderSummary, setOrderSummary] = useState(null);

  // TAMPILAN 3: Pesanan Berhasil
  if (step === 'success' && orderSummary) {
    return (
      <div className="py-6 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          ✓
        </div>
        <h2 className="text-xl font-bold text-slate-100">Pesanan Diterima!</h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Terima kasih,{' '}
          <span className="text-slate-200 font-semibold">
            {orderSummary.fullName}
          </span>
          . Konfirmasi pesanan telah dikirim ke{' '}
          <span className="text-sky-400">{orderSummary.email}</span>.
        </p>
        <div className="bg-slate-900/70 border border-slate-700/60 rounded-xl p-3 text-left text-xs text-slate-400 space-y-1">
          <p>
            <span className="text-slate-300 font-medium">Alamat:</span>{' '}
            {orderSummary.address}
          </p>
          <p>
            <span className="text-slate-300 font-medium">Metode Bayar:</span>{' '}
            {orderSummary.paymentMethod.toUpperCase()}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl text-sm transition cursor-pointer"
        >
          Selesai & Kembali Belanja
        </button>
      </div>
    );
  }

  // TAMPILAN 2: Form Checkout
  if (step === 'checkout') {
    return (
      <CheckoutForm
        onBack={() => setStep('cart')}
        onSuccess={(submittedData) => {
          setOrderSummary(submittedData);
          setStep('success');
        }}
      />
    );
  }

  // TAMPILAN 1: Daftar Isi Keranjang (Default)
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
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain bg-white rounded-lg p-1 shrink-0"
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">${item.price}</p>
              </div>

              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1">
                <button
                  type="button"
                  onClick={() => decreaseQty(item.id)}
                  className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 rounded transition text-sm font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="text-xs font-semibold text-slate-200 min-w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => increaseQty(item.id)}
                  className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 rounded transition text-sm font-bold cursor-pointer"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-emerald-400 min-w-16 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  title="Hapus barang"
                  className="text-slate-500 hover:text-rose-400 transition text-sm p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

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
            onClick={() => setStep('checkout')}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition cursor-pointer"
          >
            Lanjut ke Checkout
          </button>
        </div>
      )}
    </div>
  );
}
