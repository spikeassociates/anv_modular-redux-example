import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { App, App2 } from "./modules";

export default combineReducers({
  router: routerReducer,
  app: App.reducer,
  app2: App2.reducer
});
