import { BsCartDashFill } from "react-icons/bs";
import CurrencyPrice from "../../Utils/CurrencyPrice";
import "./CartItem.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function CartItem({ data }) {

  const {cartItems, setCartItems} = useContext(AppContext)
  const {id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
   const newCartItems = cartItems.filter(item => item.id !== id);
   setCartItems(newCartItems)
   
  }
  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{CurrencyPrice(price, "BRL")}</h3>

        <button type="button" className="btn-remove">
          <BsCartDashFill onClick={handleRemoveItem}/>
        </button>
      </div>
    </section>
  );
}
