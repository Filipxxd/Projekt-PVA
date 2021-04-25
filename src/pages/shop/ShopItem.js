// import { useState } from "react";
import ImageForProduct from "./ImageForProduct.js";

export default function ShopItem(props) {
  const product = props.product;

  // function addToCart(item) {
  //   // let old = localStorage.getItem("cartItems");
  //   // if (old === null) old = "";
  //   // localStorage.setItem("cartItems", old + item);
  //   console.log(localStorage.getItem("cartItems"));
  // }

  const AvaibilityInfo = () => {
    const avaibilityStatus = product.avaibility;
    if (!avaibilityStatus) {
      return <div className={"notavailable"}>Není skladem</div>;
    }
    if (Number.isInteger(avaibilityStatus)) {
      return <div className={"pending"}>Na cestě</div>;
    }
    return <div className={"available"}>Skladem</div>;
  };

  return (
    <div className={"product-wrap"}>
      {/*    product.label
           .normalize("NFD") // Kapitalky
             .replace(/[\u0300-\u036f]/g, "") // replace diakritiky
           .split(" ") // misto mezer
            .join("-") // pomlcky
          */}
      <div className="productImgWrapper">
        <ImageForProduct url={product.img} label={product.label} />
      </div>

      <h3>{product.label}</h3>

      <p className={"desc"}>
        {
          /* max 50 znaků description produktu*/
          product.description.substring.length > 50
            ? product.description.substring(0, 50) + "..."
            : product.description
        }
      </p>

      <span className={"fifty"}>
        <AvaibilityInfo />
        <p className={"price"}>
          <span>
            {product.sales ? product.price * (0.9).toFixed() : product.price}
          </span>{" "}
          CZK
        </p>
      </span>
      <h5 className={"addToCart"} onClick={() => props.addItem(product)}>
        PŘIDAT DO KOŠÍKU
      </h5>
    </div>
  );
}
