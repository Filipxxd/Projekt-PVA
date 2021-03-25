import Helmet from "./base/helmed.js";
import Nav from "./base/nav";
import Footer from "./base/footer.js";
import Home from "./pages/home.js";
import Kanabinoidy from "./pages/kanabino.js";
import Vyuziti from "./pages/vyuziti.js";
import Produkty from "./pages/produkty.js";
import Shop from "./pages/shop.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  console.log(window.location.href)
  return (
    <>
      <Helmet />
      <Router>
        <Nav />
        <Switch>
          <Route path="/Kanabinoidy" component={Kanabinoidy} />
          <Route path="/About" component={Vyuziti} />
          <Route path="/Produkty" component={Produkty} />
          <Route path="/Shop" component={Shop} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
