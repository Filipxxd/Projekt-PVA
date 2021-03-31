import React from "react";
import "./home.css";
import { FaGithub, FaShoppingCart } from "react-icons/fa";
export default function home() {
  return (
    <div className={"homeWrapper"}>
      <div className={"homeMain"}>
        <span className={"small"}>ŠKOLNÍ PROJEKT NA TÉMA</span>
        <span className={"large"}>KONOPÍ</span>
        <a
          href="https://github.com/Filipxxd/Projekt-PVA"
          target="_blank"
          rel="noreferrer"
          className="ghub"
          title="Link to my GitHub"
        >
          <FaGithub />
          <h2>GITHUB</h2>
        </a>
      </div>
      <div className={"adShop"}>
        <h3>VYZKOUŠEJTE NÁŠ NOVÝ E-SHOP</h3>
        <p>zahrnuje všechny základní výrobky z konopí</p>
        <FaShoppingCart />
      </div>
    </div>
  );
}
