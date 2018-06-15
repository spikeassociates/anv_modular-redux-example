import { createSelector } from "reselect";
import Modular from "modular-redux";

const selectors = moduleState => {
  const getState = state => moduleState(state);
  const list = createSelector(getState, state => state.list);

  return { list };
};

export default Modular.selectors(selectors);
