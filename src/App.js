import React, { Component } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { Route, Switch } from "react-router-dom";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projectdetails" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
