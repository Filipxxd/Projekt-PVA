import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

export default function footer() {
    return (
        <footer className="footer">
            <div className="wrapfooter">
                <div className="Links"><h2>Socky</h2>
                    <span><a href="https://github.com/Filipxxd/Projekt-PVA"><FaGithub className="FIco" />GitHub</a></span>
                    <span><a href="/"><FaFacebook className="FIco" />FakeFacebook</a></span>
                    <span><a href="/"><FaInstagram className="FIco" />FakeIG</a></span>
                </div>
                <div className="Place"><h2>Kontakt</h2>
                    <p>Zahrádka 6, 262 55 Petrovice</p>
                    <p>Tel: +420 666 666 666</p>
                    <p>attoroste@gmail.com</p>
                </div> 
            </div>

                <div className="Author">
                    <h3>&copy; Filip Chromečka</h3>
                </div>
                 </footer>
    )
}
