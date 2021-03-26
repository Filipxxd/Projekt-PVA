import React from "react";
import "./home.css";
import { FaGithub } from "react-icons/fa";
export default function home() {
  return (
    <div className="homeWrap">
      <div className="centerPage">
        <h1>KONOPÍ</h1>
        <div className="line" />
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
    </div>
  );
}
