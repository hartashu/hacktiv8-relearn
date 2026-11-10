export default function ErrorMessage({ error }) {
  return (
    <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-6 text-center space-y-2">
      <p className="text-rose-400 font-medium">Terjadi Kesalahan</p>
      <p className="text-slate-400 text-sm">{error}</p>
    </div>
  );
}
