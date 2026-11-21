import { useEffect, useState } from 'react';

export default function useProducts(category) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  async function fetchProducts(category) {
    try {
      setIsLoading(true);
      setError(null);

      // const url =
      //   category === 'all'
      //     ? 'https://fakestoreapi.com/products?limit=6'
      //     : `https://fakestoreapi.com/products/category/${category}`;

      const queryString =
        !category || category === 'all'
          ? ''
          : `?category=${encodeURIComponent(category)}`;
      const url = `http://localhost:3000/api/products${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data!');
      }

      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return {
    products,
    isLoading,
    error,
    refetch: () => fetchProducts(category),
  };
}
