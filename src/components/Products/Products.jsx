import { useEffect, useContext } from "react";
import FetchProducts from "../../Api/FetchProducts";
import CardProducts from "../CardProducts/CardProducts";
import "./Products.css";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

export default function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    FetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => {
          return (
            <CardProducts key={product.id} id={product.id} data={product} />
          );
        })}
      </section>
    )
  );
}
