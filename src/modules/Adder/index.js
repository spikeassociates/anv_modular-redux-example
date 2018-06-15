import Modular from "modular-redux";

import actions from "./actions";
import view from "./view";

const Adder = () =>
  Modular({
    name: "adder",
    actions: {
      module: actions
    },
    views: {
      module: view
    }
  });

export default Adder;
