import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isActive, setActive] = useState(false);
  function NavIcon() {
    if (isActive) {
      return <FaTimes onClick={showNav} className={"NavToggleIcon"}/>;
    } else {
      return <FaBars onClick={showNav} className={"NavToggleIcon"}/>;
    }
  }
  const showNav = () => {
    setActive(!isActive);
    NavIcon(isActive);
}
  return (
    <div id="place">
      <nav className={"navbar"}>
        <Link to="/Home">
          <img
            src={logo}
            alt="Logo"
            title = "Konopí"
            className={"Logo"}
            onClick={isActive ? showNav : console.log("missing")}
          />
        </Link>
        <div className={`underNav ${isActive ? "navToggle" : ""}`}>
          <NavLink to="/Kanabinoidy" onClick={showNav}>
            KANABINOIDY
          </NavLink>
          <NavLink to="/Produkty" onClick={showNav}>
            PRODUKTY
          </NavLink>
          <NavLink to="/Shop" onClick={showNav}>
            FAKESHOP
          </NavLink>
          <NavLink to="/About" onClick={showNav}>
            VYUŽITÍ
          </NavLink>
        </div>
        <NavIcon className={"NavToggleIcon"}/>
      </nav>
    </div>
  );
}
