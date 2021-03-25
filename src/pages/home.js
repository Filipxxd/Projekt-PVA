import React from "react";
import logo from "../img/Logo.svg";
import "./home.css";
import {FaGithub} from "react-icons/fa";
export default function home() {
  return (
    <>
      
      <div className="mainX">
        <div className="bg"></div>
        <div className="bot">
         <img src={logo} alt="Logo" className="hLogo" />
         <div className="bax" />
        <a href="https://github.com/Filipxxd/Projekt-PVA" className="ghub">
          <FaGithub/>
          <p>GITHUB</p>
          </a>
        
        </div>
        
      </div>
    </>
  );
}
