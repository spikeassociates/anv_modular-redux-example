import React from "react";
import Modular from "modular-redux";

const App = ({ Module }) => {
  return <Module.view.todos />;
};

export default Modular.view(App);
