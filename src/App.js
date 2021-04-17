import Helmet from "./base/Helmed.js";
import Nav from "./base/Nav";
import Footer from "./base/Footer.js";
import Home from "./pages/Home.js";
import Kanabinoidy from "./pages/Kanabino.js";
import Vyuziti from "./pages/Vyuziti.js";
import About from "./pages/AboutPage.js";
import Shop from "./pages/shop/ShopHome.js";

import ClickJump from "./base/ClickToTop.js";
import ContactUs from "./base/ContactUs.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Helmet />
      <Router>
        <Nav />
        <Switch>
          <Route path="/Kanabinoidy" component={Kanabinoidy} />
          <Route path="/About" component={About} />
          <Route path="/Využití" component={Vyuziti} />
          <Route path="/Shop" exact component={Shop} />
          {/* <Route path="/Shop/" component={Blank} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
      <ClickJump />
      <ContactUs />
    </>
  );
}

export default App;
