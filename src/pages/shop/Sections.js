import ShopItem from "./ShopItem.js";

export default function Sections(props) {
  var products = props.productsObject;
  var categoriesNames = Object.keys(products);
  var Items;
  var Row = [];

  for (var i = 0; i < categoriesNames.length; i++) {
    let categoryName = categoriesNames[i];
    let category = products[categoryName];
    Items = [];

    for (var j = 0; j < category.length; j++) {
      Items.push(<ShopItem product={category[j]} key={j} />);
    }

    category.forEach(item => {});
    Row.push(
      <div className="categoryLine" key={i}>
        {Items}
      </div>
    );
  }
  return Row;
}
