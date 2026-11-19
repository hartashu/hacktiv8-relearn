import { useState } from 'react';
import { useCart } from '../context/CartContext';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  address: '',
  paymentMethod: '',
};

function validateCheckoutForm(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Nama lengkap wajib diisi.';
  } else if (data.fullName.trim().length < 3) {
    errors.fullName = 'Nama minimal terdiri dari 3 karakter.';
  }

  if (!data.email.trim()) {
    errors.email = 'Alamat email wajib diisi.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Format email tidak valid (contoh: name@email.com).';
  }

  if (!data.address.trim()) {
    errors.address = 'Alamat pengiriman wajib diisi.';
  } else if (data.address.trim().length < 10) {
    errors.address = 'Alamat terlalu singkat (minimal 10 karakter).';
  }

  return errors;
}

export default function CheckoutForm({ onBack, onSuccess }) {
  const { totalPrice, resetCart } = useCart();

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateCheckoutForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    resetCart();
    onSuccess(formData);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-700">
        <h2 className="text-xl font-bold text-slate-100">Data Pengiriman</h2>
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-slate-400 hover:text-sky-400 transition cursor-pointer"
        >
          ← Kembali ke Keranjang
        </button>
      </div>

      {/* Input Nama Lengkap */}
      <div className="space-y-1">
        <label
          htmlFor="fullName"
          className="block text-xs font-medium text-slate-300"
        >
          Nama Lengkap
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Masukkan nama penerima"
          className={`w-full px-3.5 py-2 bg-slate-900 border rounded-lg text-sm text-slate-100 focus:outline-none transition ${
            errors.fullName
              ? 'border-rose-500 focus:border-rose-400'
              : 'border-slate-700 focus:border-sky-500'
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-rose-400">{errors.fullName}</p>
        )}
      </div>

      {/* Input Email */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-slate-300"
        >
          Email Konfirmasi
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@contoh.com"
          className={`w-full px-3.5 py-2 bg-slate-900 border rounded-lg text-sm text-slate-100 focus:outline-none transition ${
            errors.email
              ? 'border-rose-500 focus:border-rose-400'
              : 'border-slate-700 focus:border-sky-500'
          }`}
        />
        {errors.email && (
          <p className="text-xs text-rose-400">{errors.email}</p>
        )}
      </div>

      {/* Input Alamat Pengiriman */}
      <div className="space-y-1">
        <label
          htmlFor="address"
          className="block text-xs font-medium text-slate-300"
        >
          Alamat Lengkap
        </label>
        <textarea
          id="address"
          name="address"
          rows={3}
          value={formData.address}
          onChange={handleChange}
          placeholder="Nama jalan, nomor rumah, kecamatan, kota..."
          className={`w-full px-3.5 py-2 bg-slate-900 border rounded-lg text-sm text-slate-100 focus:outline-none transition resize-none ${
            errors.address
              ? 'border-rose-500 focus:border-rose-400'
              : 'border-slate-700 focus:border-sky-500'
          }`}
        />
        {errors.address && (
          <p className="text-xs text-rose-400">{errors.address}</p>
        )}
      </div>

      {/* Select Metode Pembayaran */}
      <div className="space-y-1">
        <label
          htmlFor="paymentMethod"
          className="block text-xs font-medium text-slate-300"
        >
          Metode Pembayaran
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-sky-500"
        >
          <option value="transfer">Transfer Bank (Virtual Account)</option>
          <option value="ewallet">E-Wallet (GoPay / OVO / Dana)</option>
          <option value="cod">Bayar di Tempat (COD)</option>
        </select>
      </div>

      {/* Ringkasan & Tombol Submit */}
      <div className="pt-3 border-t border-slate-700 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400">Total Tagihan:</span>
          <span className="text-lg font-bold text-emerald-400">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition cursor-pointer"
        >
          Konfirmasi & Bayar Sekarang
        </button>
      </div>
    </form>
  );
}
