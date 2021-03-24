import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <>
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
          <Link to="/Porovnani" onClick={showNav}>
            POHLAVÍ ROSTLIN
          </Link>
          <Link to="/" onClick={showNav}>
            BLA
          </Link>
        </div>
        <div onClick={showNav} className="right" children={<Icons className="Icon" />}></div>
      </nav>
      <div id="place"></div>
      </>
  );
}
