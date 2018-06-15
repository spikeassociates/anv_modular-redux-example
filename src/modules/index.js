// All the dependencies will be injected here
import AdderModule from "./Adder";
import TodosModule from "./Todos";
import AppModule from "./App";

const Adder = AdderModule();
const Todos = TodosModule(Adder);
const App = AppModule(Todos);

const Adder2 = AdderModule();
const Todos2 = TodosModule(Adder2);
const App2 = AppModule(Todos2);

export { App, App2 };
