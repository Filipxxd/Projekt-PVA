import React from "react";
import logo from "../img/Logo.svg";
import "./home.css";

export default function home() {
  return (
    <>
      
      <div className="mainX">
        <div className="bg"></div>
        <div className="bot">
         <img src={logo} alt="Logo" className="hLogo" />
        <span>Léčivé konopí</span> 
        </div>
        
      </div>
    </>
  );
}
