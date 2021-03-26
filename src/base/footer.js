import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaWarehouse,
  FaEnvelope
} from "react-icons/fa";
import "./footer.css";

export default function footer() {
  return (
    <footer className="footer">
      <div className="before">
        <div className="kontakt" title="Adresa">
          <FaWarehouse />
          <p>Kaménka 6, 742 38 Odry</p>
        </div>
        <div className="kontakt" title="Telefonní číslo">
          <FaPhoneAlt />
          <p>+420 666 666 666</p>
        </div>
        <div className="kontakt" title="E-mail">
          <FaEnvelope />
          <p>mail@gmail.com</p>
        </div>
      </div>
      <div className="after">
        <a href="/" title="Twitter">
          <FaTwitter />
        </a>
        <a href="/" title="Facebook">
          <FaFacebook />
        </a>
        <a href="/" title="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
