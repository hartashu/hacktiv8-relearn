import { Outlet } from 'react-router';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Bagian Permanen: Selalu tampil di semua halaman */}
        <Header />

        {/* Bagian Dinamis: React Router akan menyuntikkan halaman aktif di sini */}
        <main className="space-y-6">
          <Outlet />
        </main>

        {/* Contoh tambahan jika ingin Footer di semua halaman */}
        <footer className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          Catalog Explorer &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
