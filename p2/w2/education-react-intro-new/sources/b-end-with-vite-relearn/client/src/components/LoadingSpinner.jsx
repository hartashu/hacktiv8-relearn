export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
      <div className="w-8 h-8 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-slate-400 text-sm">
        Sedang mengambil data dari server...
      </p>
    </div>
  );
}
