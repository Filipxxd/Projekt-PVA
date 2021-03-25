import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

export default function footer() {
  return (
    <footer className="footer">
      <div className="Links">
        <h2>Socky</h2>
        <a href="https://github.com/Filipxxd/Projekt-PVA">
          <FaGithub className="FIco" />
          <p>GitHub</p>
        </a>
        <a href="/">
          <FaFacebook className="FIco" />
          <p>FakeFacebook</p>
        </a>
        <a href="/">
          <FaInstagram className="FIco" />
          <p>FakeIG</p>
        </a>
      </div>
      <div className="Place">
        <h2>Kontakt</h2>
        <span>
          Adresa: Zahrádka 6, 262 55 <strong>Petrovice</strong>
        </span>
        <span>Tel: +420 666 666 666</span>
        <span>E-mail: randomgmail@gmail.com</span>
      </div>
      <h3 className="Author">&copy; Filip Chromečka</h3>
    </footer>
  );
}
