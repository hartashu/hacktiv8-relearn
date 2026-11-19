import { useState } from 'react';
import useProducts from '../hooks/useProducts';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('q') || '';

  // const [selectedCategory, setSelectedCategory] = useState('all');
  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [isCartOpen, setIsCartOpen] = useState(false);

  const { products, isLoading, error, refetch } = useProducts(selectedCategory);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  function handleSelectCategory(newCategory) {
    setSearchParams((prev) => {
      if (newCategory === 'all') {
        prev.delete('category');
      } else {
        prev.set('category', newCategory);
      }

      return prev;
    });
  }

  function handleSearchSubmit(newQuery) {
    setSearchParams((prev) => {
      const trimmed = newQuery.trim();
      if (!trimmed) {
        prev.delete('q');
      } else {
        prev.set('q', trimmed);
      }

      return prev;
    });
  }

  return (
    <>
      <div className="space-y-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        <SearchBar onSearchSubmit={handleSearchSubmit} />

        <button
          onClick={refetch}
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 transition font-medium rounded-lg text-white text-sm cursor-pointer shadow-lg shadow-sky-500/10"
        >
          Muat Ulang
        </button>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : filteredProducts.length === 0 ? (
        // 1. Pesan Empty State berdiri bebas (melebar penuh di tengah)
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-8 text-center space-y-2">
          <p className="text-slate-300 font-medium">Produk tidak ditemukan</p>
          <p className="text-slate-500 text-sm">
            Tidak ada produk yang cocok dengan pencarian "{searchQuery}"
          </p>
        </div>
      ) : (
        // 2. Container Grid HANYA dipasang jika memang ada kartu produk yang akan dirender
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              // onClick={() => setSelectedProduct(product)}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* <Link> taruh di dalam component ProductCard atau taruh di sini? */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {/* <Modal
          isOpen={Boolean(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
        >
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </Modal> */}

      {/* <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
          <CartView onClose={() => setIsCartOpen(false)} />
        </Modal> */}
    </>
  );
}
