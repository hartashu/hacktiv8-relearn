import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import useProducts from './hooks/useProducts';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import ProductDetail from './components/ProductDetail';
import CartView from './components/CartView';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { products, isLoading, error, refetch } = useProducts(selectedCategory);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  // function handleClickProduct() {}

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header & Aksi */}
        <Header onReload={refetch} onOpenCart={() => setIsCartOpen(true)} />

        <div className="space-y-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <SearchBar onSearchSubmit={setSearchQuery} />
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage error={error} />
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
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <Modal
          isOpen={Boolean(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
        >
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </Modal>

        <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
          <CartView onClose={() => setIsCartOpen(false)} />
        </Modal>
      </div>
    </div>
  );
}
