import { FaArrowCircleUp } from "react-icons/fa";
import "./addons.css";

export default function clickToTop() {
  function jumpToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <FaArrowCircleUp
      onClick={jumpToTop}
      className={`ScrollBtn ${
        window.pageYOffset > window.innerHeight ? "shown" : "shown"
      }`}
    />
  );
}
