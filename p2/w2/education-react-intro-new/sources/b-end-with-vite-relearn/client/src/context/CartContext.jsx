import { createContext, useContext, useEffect, useReducer } from 'react';

const CART_STORAGE_KEY = 'catalog_cart';

const CartContext = createContext();

function getInitialCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Gagal membaca data keranjang dari localStorage:', error); // Kapan kita tahu pakai throw new Error, console.log, atau pun console.error?
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.find((item) => item.id === action.payload.id); // Ini tidak usah buat jadi function findCartItem ya?

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'INCREASE_QTY': {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }

    case 'DECREASE_QTY': {
      const existingItem = state.find((item) => item.id === action.payload); // Ini tidak usah buat jadi function findCartItem ya?

      if (!existingItem) {
        // Apakah butuh guard clause ini?
        return state;
      }

      if (existingItem.quantity <= 1) {
        return state.filter((item) => item.id !== action.payload); // Ini tidak usah buat jadi function filterOutItem ya?
      }

      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    }

    case 'REMOVE_ITEM': {
      return state.filter((item) => item.id !== action.payload); // Ini tidak usah buat jadi function filterOutItem ya?
    }

    case 'RESET_CART': {
      return [];
    }

    default: {
      // default ini bagusan return state atau throw new Error?
      throw new Error(`Action type tidak dikenali: ${action.type}`);
    }
  }
}

/*

function findCartItem(items, productId) {
  return items.find((item) => item.id === productId);
}

function filterOutItem(items, productId) {
  return items.filter((item) => item.id !== productId);
}

*/

export function CartProvider({ children }) {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, dispatch] = useReducer(cartReducer, [], getInitialCart);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  /*

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

  */

  function addToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function increaseQty(productId) {
    dispatch({ type: 'INCREASE_QTY', payload: productId });
  }

  function decreaseQty(productId) {
    dispatch({ type: 'DECREASE_QTY', payload: productId });
  }

  function removeItem(productId) {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  }

  function resetCart() {
    dispatch({ type: 'RESET_CART' });
  }

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Gagal menyimpan data keranjang ke localStorage:', error); // Kapan kita tahu pakai throw new Error, console.log, atau pun console.error?
    }
  }, [cartItems]);

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
