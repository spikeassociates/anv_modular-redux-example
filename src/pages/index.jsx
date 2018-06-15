import React from "react";
import loadable from "loadable-components";
import { Route, Switch } from "react-router-dom";

export const Home = loadable(() => import("./Home"));
export const NotFound = loadable(() => import("./NotFound"));

const Pages = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Pages;
