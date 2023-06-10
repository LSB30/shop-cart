import { useState } from "react";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
