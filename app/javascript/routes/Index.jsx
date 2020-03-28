import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Userfeed from "../components/Userfeed";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/userfeed" exact component={Userfeed} />
    </Switch>
  </Router>
);