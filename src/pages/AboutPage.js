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
            Web je "postaven" v
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
              {" "}
              Reactu
            </a>{" "}
            , ikony importovány z
            <a href="https://fontawesome.com/" rel="noreferrer" target="_blank">
              {" "}
              Font Awesome
            </a>
            , obrázky staženy z
            <a href="https://pixabay.com/" rel="noreferrer" target="_blank">
              Pixabay
            </a>{" "}
            a to něco málo informací je z{" "}
            <a href="https://legalizace.cz/" rel="noreferrer" target="_blank">
              Legalizace.cz
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
