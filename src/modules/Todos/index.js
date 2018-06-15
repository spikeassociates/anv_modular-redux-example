import Module from "modular-redux";

import actions from "./actions";
import reducer from "./reducer";
import selectors from "./selectors";
import view from "./view";
import todos from "./view/todos";

const Todos = Adder =>
  Module({
    name: "todos",
    actions: {
      module: actions,
      adder: Adder.actions
    },
    reducers: {
      module: reducer
    },
    selectors: {
      module: selectors
    },
    views: {
      module: view,
      todos: todos,
      adder: Adder.view
    }
  });

export default Todos;
