import Modular from "modular-redux";
import view from "./view";
import React from "react";

const config = module => "secret_token_" + module.instance;
const abc = module => "abc_" + module.config.app;

const App = Todos =>
  Modular(
    {
      name: "app",
      actions: {
        todos: Todos.actions
      },
      reducers: {
        todos: Todos.reducer
      },
      views: {
        module: view,
        todos: Todos.view
      },
      config: {
        module: config
      },
      abc: {
        module: abc
      }
    },
    [{ feature: "config" }, { feature: "abc" }]
  );

export default App;
