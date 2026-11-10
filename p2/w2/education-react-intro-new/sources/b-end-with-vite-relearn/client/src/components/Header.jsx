export default function Header({ onReload }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-2xl font-bold text-sky-400">Catalog Explorer</h1>
        <p className="text-slate-400 text-sm mt-1">
          Menampilkan data katalog produk langsung dari server
        </p>
      </div>
      <button
        onClick={onReload}
        className="px-4 py-2 bg-sky-500 hover:bg-sky-600 transition font-medium rounded-lg text-white text-sm cursor-pointer shadow-lg shadow-sky-500/10"
      >
        Muat Ulang Data
      </button>
    </div>
  );
}
