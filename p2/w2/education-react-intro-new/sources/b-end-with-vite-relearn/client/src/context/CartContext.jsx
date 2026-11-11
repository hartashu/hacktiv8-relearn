import { createContext, useContext, useState } from 'react';

function findCartItem(items, productId) {
  return items.find((item) => item.id === productId);
}

function filterOutItem(items, productId) {
  return items.filter((item) => item.id !== productId);
}

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = findCartItem(prevItems, product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function increaseQty(productId) {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function decreaseQty(productId) {
    setCartItems((prevItems) => {
      const existingItem = findCartItem(prevItems, productId);
      if (!existingItem) {
        return prevItems;
      }

      if (existingItem.quantity <= 1) {
        return filterOutItem(prevItems, productId);
      }

      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  }

  function removeItem(productId) {
    setCartItems((prevItems) => {
      return filterOutItem(prevItems, productId);
    });
  }

  function resetCart() {
    setCartItems([]);
  }

  const value = {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    resetCart,
    increaseQty,
    decreaseQty,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart harus digunakan di dalam CartProvider');
  }

  return context;
}
