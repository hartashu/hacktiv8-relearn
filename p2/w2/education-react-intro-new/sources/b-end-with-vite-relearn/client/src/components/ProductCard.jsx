export default function ProductCard({ product }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col justify-between hover:border-slate-600 transition">
      <div className="space-y-3">
        <div className="h-44 bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt="Product"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
          {product.category}
        </span>
        <h3 className="font-semibold text-white text-sm line-clamp-2">
          {product.title}
        </h3>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
        <span className="text-xs text-slate-400">Harga</span>
        <span className="text-base font-bold text-emerald-400">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
