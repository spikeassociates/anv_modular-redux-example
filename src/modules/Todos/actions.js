import Modular from "modular-redux";

const types = ["REMOVE_TODO"];

const actions = types => ({
  removeTodo: payload => ({ type: types.REMOVE_TODO, payload })
});

export default Modular.actions(types, actions);
