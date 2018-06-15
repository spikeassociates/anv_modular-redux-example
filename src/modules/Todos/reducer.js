import Modular from "modular-redux";

const genUID = () =>
  Date.now().toString(36) +
  Math.random()
    .toString(36)
    .substr(2, 5);

const initialState = {
  list: []
};

const reducer = (state = initialState, action, Module) => {
  const { actions } = Module;
  const { types: todoTypes, adder: adderActions } = actions;
  const { types: adderTypes } = adderActions;

  switch (action.type) {
    case adderTypes.ADD_ITEM:
      const newList = action.payload ? [...state.list, { uid: genUID(), text: action.payload }] : state.list;

      return {
        ...state,
        list: newList
      };

    case todoTypes.REMOVE_TODO:
      const filteredList = state.list.filter(todo => todo.uid !== action.payload);
      return { ...state, list: filteredList };

    default:
      return state;
  }
};

export default Modular.reducer(reducer);
