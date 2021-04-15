import React, { useState, useEffect } from "react";
import "./css/shopHome.css";
import Section from "./Sections.js";
import PageHeader from "../../base/PageHeader.js";
import { Helmet } from "react-helmet";

const slideImages = ["img/flowers.jpg", "img/oils.jpg", "img/seeds.jpg"];
export default function ShopHome() {
  const [productsObject, setproductsObject] = useState([]);

  const getProductsObject = () => {
    fetch("./products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setproductsObject(myJson);
      });
  };
  useEffect(() => {
    getProductsObject();
  }, []);

  var temporary =
    productsObject.length === 0 ? (
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          paddingTop: "2.5rem"
        }}
      >
        loading
      </div>
    ) : (
      <Section productsObject={productsObject} />
    );
  return (
    <>
      <Helmet>
        <title>FAKESHOP</title>
      </Helmet>
      <PageHeader pageName="FAKESHOP" />
      <div className="categories">{temporary}</div>
    </>
  );
}
