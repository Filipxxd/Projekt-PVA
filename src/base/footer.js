import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

export default function footer() {
    return (
        <footer className="footer">
                <ul className="ulIcon"><h2>Kontakty</h2>
                    <li><a href="https://github.com/Filipxxd/Projekt-PVA"><FaGithub />GitHub</a></li>
                    <li><a href="/"><FaFacebook />FakeFacebook</a></li>
                    <li><a href="/"><FaInstagram />FakeIG</a></li>
                </ul>
                <ul><h2>Sídlo</h2>
                    <li>Zahrádka 6, 262 55 Petrovice</li>
                    <li></li>
                    <li></li>
                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!4v1616614941449!6m8!1m7!1sdOKFybI4Rxfnxx2YABE0VA!2m2!1d49.5528718815605!2d14.30315061778148!3f211.9476766907245!4f-2.1245343514619606!5f0.7820865974627469" title="Sídlo "allowfullscreen="" aria-hidden="true" loading="lazy"></iframe>
                 </footer>
    )
}
