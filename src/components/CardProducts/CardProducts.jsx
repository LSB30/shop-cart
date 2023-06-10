import propTypes from "prop-types";
import CurrencyPrice from "../../Utils/CurrencyPrice";
import { BsFillCartPlusFill } from "react-icons/bs";
import "./CardProducts.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function CardProducts({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };
  
  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card-img"
      />

      <div className="card-infos">
        <h2 className="card-price">{CurrencyPrice(price, "BRL")}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button type="button" className="button-addCard" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

CardProducts.prototype = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
  }),
}.isrequerid;
