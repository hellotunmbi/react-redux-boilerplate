import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Project from "./components/Project";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper" className="mt-4">
          <div className="App">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/project" component={Project} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
