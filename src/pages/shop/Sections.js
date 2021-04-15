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
    category.forEach(item => {
      Items.push(<ShopItem product={item} key={item.id} />);
    });
    Row.push(
      <div className="categoryLine" key={i}>
        {Items}
      </div>
    );
  }
  return Row;
}
