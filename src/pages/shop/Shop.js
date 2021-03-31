import React from "react";
import ShopSection from "./ShopSection.js";
import "./css/shop.css";

export default function Shop() {
  var products, rawImport, sectionNames;
  const output = [];
  rawImport = require("./products.json");
  sectionNames = Object.keys(rawImport);
  sectionNames.forEach(type => {
    products = rawImport[type];
    output.push(<ShopSection products={products} type={type} key={type} />);
  });
  return <div className={"shopComponent"}>{output}</div>;
}
