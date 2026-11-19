import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center space-y-4">
      <h1 className="text-5xl font-extrabold text-slate-700">404</h1>
      <p className="text-lg font-semibold text-slate-200">
        Halaman Tidak Ditemukan
      </p>
      <p className="text-sm text-slate-400">
        Alamat URL yang kamu tuju tidak tersedia.
      </p>
      <Link
        to="/"
        className="inline-block mt-4 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-xl transition"
      >
        Kembali ke Katalog
      </Link>
    </div>
  );
}
