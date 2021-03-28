import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "./nav.css";

export default function Nav() {
  const [isActive, setActive] = useState(false);
  const showNav = () => {
    setActive(!isActive);
  };
  window.addEventListener("resize", ()=>{
    setActive(false)
  })
  return (
    <div id="place">
      <nav className={"navbar"}>
        <Link to="/Home" className={"Logowrap"}>
          <img
            src={logo}
            alt="Logo"
            title="Konopí"
            className={"Logo"}
            onClick={isActive ? showNav : null}
          />
        </Link>
        <div className={`underNav ${isActive ? "navToggle" : null}`}>
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
        <div className={"NavToggleWrapper"} onClick={showNav}>
          <span className={"click ToClose"}>
            <i className={`firstLine ${isActive ? null : "firstAnim"}`} />
            <i className={`secondLine ${isActive ? null : "secondAnim"}`} />
          </span>
          <span className={"click ToOpen"}>
            <i className={`topLine ${isActive ? "topAnim" : null}`} />
            <i className={`midLine ${isActive ? "midAnim" : null}`} />
            <i className={`botLine ${isActive ? "botAnim" : null}`} />
          </span>
        </div>
      </nav>
    </div>
  );
}
