import React from "react";
import { Switch, Route } from "react-router-dom";

import ListNews from "../pages/ListNews";
import News from "../pages/News";

const Routes = () => (
    <Switch>
      <Route path="/" exact component={ListNews} />
      <Route path="/news/:id" component={News} />
    </Switch>
);

export default Routes;