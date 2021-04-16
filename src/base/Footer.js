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
        <a
          href="https://www.twitter.com/"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
