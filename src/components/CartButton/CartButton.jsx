import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartButton.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
export default function CartButton() {
  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);

  return (
    <button 
    type="button" 
    className="cart-button"
    onClick={ () => setCartVisible(!cartVisible)}
    >
      <AiOutlineShoppingCart />

      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}
