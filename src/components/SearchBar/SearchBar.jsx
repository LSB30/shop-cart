import { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import AppContext from "../../context/AppContext";
import FetchProducts from "../../Api/FetchProducts";

import "./SearchBar.css";

export default function SearchBar() {
  const [searchValue, setSeachValue] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await FetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSeachValue("");
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos"
        required
        onChange={(event) => setSeachValue(event.target.value)}
        className="search-input"
        value={searchValue}
      />

      <button type="submit" className="search-button">
        <BsSearch size={20} />
      </button>
    </form>
  );
}
