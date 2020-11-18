import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home city='Toronto'/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
