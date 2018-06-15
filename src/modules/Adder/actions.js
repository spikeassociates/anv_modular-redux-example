import Modular from "modular-redux";

const types = ["ADD_ITEM"];

const actions = types => ({
  addItem: payload => ({ type: types.ADD_ITEM, payload })
});

export default Modular.actions(types, actions);
