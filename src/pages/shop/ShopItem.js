import ImageForProduct from "./ImageForProduct.js";
import "./css/shopItem.css";

export default function shopItem(props) {
  const product = props.product;

  const AvaibilityInfo = () => {
    const avaibilityStatus = product.avaibility;
    if (!avaibilityStatus) {
      return <div className={"notavailable"}>Není skladem</div>;
    }
    if (Number.isInteger(avaibilityStatus)) {
      return <div className={"pending"}>Na cestě</div>;
    }
    return <div className={"available"}>Skladem</div>;
  };

  return (
    <div className={"product-wrap"}>
      <a
        className={"productImgLink"}
        href={
          "/" +
          product.label
            .normalize("NFD") // Kapitalky
            .replace(/[\u0300-\u036f]/g, "") // replace diakritiky
            .split(" ") // misto mezer
            .join("-") // pomlcky
        }
      >
        <ImageForProduct url={product.img} label={product.label} />
      </a>
      <h3>{product.label}</h3>

      <p className={"desc"}>
        {
          /* max 50 znaků v description*/
          product.description.substring.length > 50
            ? +product.description.substring(0, 50) + "..."
            : product.description
        }
      </p>

      <span className={"fifty"}>
        <AvaibilityInfo />
        <p className={"price"}>
          <span>{product.sales ? product.price * 0.9 : product.price}</span> CZK
        </p>
      </span>
      <h5 className={"addToCart"}>PŘIDAT DO KOŠÍKU</h5>
    </div>
  );
}
