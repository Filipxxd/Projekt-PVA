import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import ShopCategoriesNav from "./ShopCategoriesNav.js";
import PageHeader from "../../base/PageHeader.js";
import ShopItem from "./ShopItem.js";

import "./css/shopHome.css";
import "./css/shopItem.css";

export default function ShopHome() {
  // state array s jsonem, fetchuje se az po renderu pro imitaci ziskavani dat / api ze serveru
  const [productsObject, setProductsObject] = useState([]);
  const getProductsObject = () => {
    fetch("/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        setProductsObject(myJson);
      });
  };
  useEffect(() => {
    getProductsObject();
  }, []);

  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
    alert("na tomhle tez pracuju");
  };

  // standart loading output
  var output = (
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          paddingTop: "2rem"
        }}
      >
        loading
      </div>
    ),
    categoryNames = Object.keys(productsObject),
    category;
  if (categoryNames.length > 0) {
    if (window.location.pathname === "/Shop/") {
      category = <div>pracuju na tom</div>;
    } else if (window.location.pathname === "/Shop/Cart")
      category = <div>pracuju na tom</div>;
    // else if()  ;
    else if (window.location.pathname) {
      function updateString(string) {
        return string
          .normalize("NFD") // Kapitalky
          .replace(/[\u0300-\u036f]/g, "") // replace diakritiky
          .split(" ") // nahrad mezery -
          .join("-");
      }
      var productArray = [],
        path = updateString(window.location.pathname),
        categoryName;

      let n = path.lastIndexOf("/");

      categoryNames.forEach(name => {
        if (updateString(name) === path.substring(n + 1))
          productsObject[name].forEach(product => {
            categoryName = name;
            productArray.push(
              <ShopItem
                addItem={addItem}
                product={product}
                key={product.label}
              />
            );
          });
      });
      category = (
        <div key={path}>
          <h2 className="categoryName">{categoryName}</h2>
          <div className="categoryWrapper">{productArray}</div>
        </div>
      );
    }

    output = (
      <div className="mainWrapper">
        <ShopCategoriesNav categoryNames={categoryNames} />
        {category}
      </div>
    );
  }
  console.log(cart);
  return (
    <>
      <Helmet>
        <title>FAKESHOP</title>
      </Helmet>
      <PageHeader pageName="FAKESHOP" />
      {output}
    </>
  );
}
