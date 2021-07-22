import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";
import { Donate } from "./components/Donate";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { UpComingEvent } from "./components/UpComingEvent";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/donate" component={Donate} />
        <Route path="/shop" component={Shop} />

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

/***
 *
 *
 * Git is a version control system
 *
 * 1. to record changes made to files over time.
 * 2. compare changes made to files from one version to another.
 *
 *
 *
 */
