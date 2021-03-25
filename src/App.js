import Helmet from "./base/helmet.js";
import Nav from "./base/nav";
import Footer from "./base/footer.js";
import Home from "./pages/home.js";
import Kanabinoidy from "./pages/kanabino.js";
import About from "./pages/vyuziti.js";
import Porovnani from "./pages/porovnani.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Helmet />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Kanabinoidy" component={Kanabinoidy} />
          <Route path="/About" component={About} />
          <Route path="/Porovnani" component={Porovnani} />
          <Route path="" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
