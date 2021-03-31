import React from "react";
import ImageForProduct from "./ImageForProduct.js";
import "./css/shopItem.css";
export default function ShopItem(props) {
  const product = props.product;

  return (
    <div className={"product-wrap"}>
      <a className={"productIMG"} href={product.label}>
        <ImageForProduct url={product.img} label={product.label} />
      </a>
      <h3>{product.label}</h3>
      <p className={"desc"}>{product.description}</p>
      <span className={"fifty"}>
        <p className={product.avaibility ? "available" : "notavailable"}>
          {product.avaibility ? "Skladem" : "Není skladem"}
        </p>
        <p className={"price"}>
          <span>{product.sales ? product.price * 0.9 : product.price}</span>CZK
        </p>
      </span>

      <h5 className="addToCart">ADD TO CART</h5>
    </div>
  );
}
