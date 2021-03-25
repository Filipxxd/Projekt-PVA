import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isActive, setActive] = useState("false");
  function Icons() {
    if (!isActive) {
      return <FaBars className="Icon" />;
    } else {
      return <FaTimes className="Icon" />;
    }
  }
  const showNav = () => {
    setActive(!isActive);
    Icons(isActive);
  };

  return (
    <div id="place">
      <nav className={`navig fixed ${isActive ? "fixedNav" : ""}`}>
        <Link to="/Home">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={isActive ? showNav : console.log("missing")}
          />
        </Link>
        <div className={`underNav fixed ${isActive ? "navOpen" : ""}`}>
          <Link to="/About" onClick={showNav}>
            VYUŽITÍ
          </Link>
          <Link to="/Kanabinoidy" onClick={showNav}>
            KANABINOIDY
          </Link>
          <Link to="/Shop" onClick={showNav}>
            FAKESHOP
          </Link>
          <Link to="/Produkty" onClick={showNav}>
            PRODUKTY
          </Link>
        </div>
        <div
          onClick={showNav}
          className="right"
          children={<Icons className="Icon" />}
        ></div>
      </nav>
    </div>
  );
}
