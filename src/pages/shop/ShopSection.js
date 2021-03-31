import React from "react";
import ShopItem from "./ShopItem.js";
import "./css/shopSection.css";

export default function ShopSection(props) {
  var i;
  const output = [];
  const products = props.products;
  for (i = 0; i < products.length; i++) {
    var product = products[i];
    output.push(<ShopItem product={product} key={i} />);
  }
  return (
    <div className="shopSection">
      <h1>{props.type.toUpperCase()}</h1>
      <div className="shopItems">{output}</div>
    </div>
  );
}
