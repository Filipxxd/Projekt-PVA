import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import SearchBar from "./SearchBar.js";

export default function ShopCategories(props) {
  var output = [];

  props.categoryNames.forEach(categoryName => {
    output.push(
      <Link
        to={categoryName
          .normalize("NFD") // Kapitalky
          .replace(/[\u0300-\u036f]/g, "") // replace diakritiky
          .split(" ") // misto mezer
          .join("-")}
        key={categoryName}
      >
        {categoryName}
      </Link>
    );
  });

  const showCart = () => {
    return;
  };

  return (
    <div className="shopNav">
      <span>
        <Link to="Cart" className="cartIconWrapper">
          <FaShoppingBag onClick={showCart} className="cartIcon" />
          <i>KOŠÍK</i>
        </Link>
        <SearchBar />
      </span>
      <h4>KATEGORIE</h4>

      <span className="shopNavLinks">
        <Link to="/Shop/">DOPORUČENÉ</Link>
        {output}
      </span>
    </div>
  );
}
