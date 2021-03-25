import React from "react";
import { Link } from "react-router-dom";
import "./porovnani.css";
export default function porovnani() {
  return (
    <>
      <div className="wrapper">
        <Link to="/samec" className="samec">
          <p className="samecText">samec</p>
        </Link>
        <Link to="/samice" className="samice">
          <p className="samiceText">samice</p>
        </Link>
      </div>
      <div className="content"></div>
    </>
  );
}
