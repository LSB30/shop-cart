import { useContext } from "react";
import CartItem from "../CartItem/CarItem";
import "./Cart.css";
import AppContext from "../../context/AppContext";
import CurrencyPrice from "../../Utils/CurrencyPrice";

export default function Cart() {
  const { cartItems, cartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);
  return (
    <section className={`cart ${cartVisible ? "cart-active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} data={item} />;
        })}
      </div>

      <div className="cart-resume">{CurrencyPrice(totalPrice, "BRL")}</div>
    </section>
  );
}
