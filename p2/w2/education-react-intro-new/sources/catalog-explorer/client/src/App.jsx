// import { useState } from 'react';
// import ErrorMessage from './components/ErrorMessage';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';
// import LoadingSpinner from './components/LoadingSpinner';
// import ProductCard from './components/ProductCard';
// import CategoryFilter from './components/CategoryFilter';
// import useProducts from './hooks/useProducts';
// import SearchBar from './components/SearchBar';
// import Modal from './components/Modal';
// import ProductDetail from './components/ProductDetail';
// import CartView from './components/CartView';

function LoginPage() {
  return <h1>Login Page</h1>;
}

export default function App() {
  return (
    // <div className="min-h-screen bg-slate-900 text-slate-100 p-8 flex justify-center">
    //   <div className="w-full max-w-4xl space-y-6">
    //     {/* Header & Aksi */}
    //     <Header
    //     // onReload={refetch} // Kalau mau refetch jadinya gimana?
    //     // onOpenCart={() => setIsCartOpen(true)}
    //     />

    //     <main className="space-y-6">
    //       <Routes>
    //         <Route path="/" element={<HomePage />} />
    //         <Route path="/product/:id" element={<ProductDetailPage />} />
    //         <Route path="/cart" element={<CartPage />} />
    //         <Route path="*" element={<NotFoundPage />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </div>

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
