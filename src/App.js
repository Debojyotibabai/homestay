import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// component
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Hotels from "./Component/Hotels";
import Cars from "./Component/Cars";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

// css
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* navbar */}
      <Navbar />

      {/* main section */}
      <div className="main__section">
        {/* pages */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hotels" component={Hotels} />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>

      {/* footer */}
      <Footer />
    </Router>
  );
};

export default App;
