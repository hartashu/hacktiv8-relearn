export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  // Daftar kategori yang tersedia di FakeStoreAPI
  const categories = [
    { label: 'Semua', value: 'all' },
    { label: 'Elektronik', value: 'electronics' },
    { label: 'Perhiasan', value: 'jewelery' },
    { label: 'Pakaian Pria', value: "men's clothing" },
    { label: 'Pakaian Wanita', value: "women's clothing" },
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
