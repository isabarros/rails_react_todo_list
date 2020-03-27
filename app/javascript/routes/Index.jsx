import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "../components/Example";
import Homepage from "../components/Homepage";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/example" exact component={Example} />
    </Switch>
  </Router>
);