import "./pageHeader.css";

export default function pageHeader(props) {
  var text = props.pageName;
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}
