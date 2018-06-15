import React from "react";
import Modular from "modular-redux";
import { TodoContainer } from "./styles";

// We will use closures to give the module view, access to the module instance
const View = ({ Module }) => (
  <TodoContainer>
    <header>{Module.instance}</header>
    <Module.view.adder />
    <Module.view.todos Module={Module} />
  </TodoContainer>
);

export default Modular.view(View);
