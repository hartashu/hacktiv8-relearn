export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  // Daftar kategori yang tersedia di FakeStoreAPI
  const categories = [
    { label: 'Semua', value: 'all' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Books', value: 'Books' },
    { label: 'Home & Living', value: 'Home & Living' },
    { label: 'Apparel', value: 'Apparel' },
  ];

  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => onSelectCategory(cat.value)}
            type="button"
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              isActive
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
