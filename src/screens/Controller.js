import React from "react";
//import Header from "./common/header/Header";
import Home from "../common/home/Home";
import BookShow from "./bookshow/BookShow";
//import Details from "./details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Controller() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book-show/:id" component={BookShow} />
        </Switch>
      </div>
    </Router>
  );
}

export default Controller;
