import Provider from "./context/Provider";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <>
      <Provider>
        <Header />
        <Products />
        <Cart/>
      </Provider>
    </>
  );
}
