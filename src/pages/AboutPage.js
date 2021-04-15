import "./aboutPage.css";
import PageHeader from "../base/PageHeader.js";
import { FaPills, FaShoppingBasket, FaReact } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function aboutPage() {
  return (
    <>
      <Helmet>
        <title>ABOUT</title>
      </Helmet>
      <PageHeader pageName="ABOUT" />
      <div className="aboutWrapper">
        <div>
          <FaPills className="aboutIcon" />
          <p>
            Tento projekt ani má osoba nenabádá k protizákonému
            <strong> užívání</strong> omamných a psychotropních látek, jejich
            <strong> výrobě</strong>, a <strong>distribuci</strong>
          </p>
        </div>
        <div>
          <FaShoppingBasket className="aboutIcon" />
          <p>E-shop je ve vývoji, funkcionalita omezena</p>
        </div>
        <div>
          <FaReact className="aboutIcon" />
          <p>
            Web je "postaven" v<a href="https://reactjs.org/"> Reactu</a> ,
            ikony importovány z
            <a href="https://fontawesome.com/"> Font Awesome</a>, obrázky
            staženy z<a href="https://pixabay.com/"> Pixabay</a> a to něco málo
            informací je z <a href="https://legalizace.cz/"> Legalizace.cz</a>
          </p>
        </div>
      </div>
    </>
  );
}
