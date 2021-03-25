import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./ffooter.css";

export default function ffooter() {
  return (
    <div className="wrapF">
      <div className="footer">
        <div className="Icons">
          <a href="https://github.com/Filipxxd/Projekt-PVA" title="GitHub">
            <FaGithub />
          </a>
          <a href="/" title="Facebook">
            <FaFacebook />
          </a>
          <a href="/" title="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div className="bar"></div>
        <div className="Kontakt">
          <p>
            Adresa: Zahrádka 6, 262 55 <strong>Petrovice</strong>
          </p>
          <p>Telefon: +420 666 666 666</p>
          <p>E-mail: randomgmail@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
