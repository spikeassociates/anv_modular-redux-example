import { combineReducers } from "redux";

const Navbar: Module = () => ({
  reducer: () => {},

  view: {
    navbar: Navbar.view,
    footer: Footer.view
  }
});

export default App;
