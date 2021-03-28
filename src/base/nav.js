import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "./nav.css";

export default function Nav() {
  const [isActive, setActive] = useState(false);
  const showNav = () => {
    setActive(!isActive);
  };






  return (
    <div id="place">
      <nav className={"navbar"}>
        <Link to="/Home">
          <img
            src={logo}
            alt="Logo"
            title="Konopí"
            className={"Logo"}
            onClick={isActive ? showNav : null}
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
        <div className={"NavToggleWrapper"} onClick={ showNav}>
        <span className={"click ToClose"}>
          <i className={`firstLine ${!isActive ? "firstAnim" : ""}`} />
          <i className={`secondLine ${!isActive ? "secondAnim" : ""}`} />
        </span>


        <span className="click ToOpen">
          <i className={`topLine ${isActive ? "topAnim" : ""}`} />
          <i className={`midLine ${isActive ? "midAnim" : ""}`}/>
          <i className={`botLine ${isActive ? "botAnim" : ""}`} />
        </span>
</div>
      </nav>
    </div>
  );
}
