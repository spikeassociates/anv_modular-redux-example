import React from "react";
import { ConnectedRouter } from "react-router-redux";

import { history } from "./store";
import Pages from "./pages";

const router = (
  <ConnectedRouter history={history}>
    <Pages />
  </ConnectedRouter>
);

export default router;
