import React from "react";
import { connect } from "react-redux";

import { StyledTodos, Todo, Button } from "./styles";

const Todos = ({ removeTodo, todos }) => (
  <StyledTodos>
    <header>Todos</header>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.uid}>
          {todo.text}
          <Button type="button" onClick={() => removeTodo(todo.uid)}>
            &#10005;
          </Button>
        </Todo>
      ))}
      {todos.length === 0 && <em>Congratulations! You have excelled in life and have nothing to do.</em>}
    </ul>
  </StyledTodos>
);

const mapStateToProps = (state, { Module }) => ({
  todos: Module.selectors.list(state)
});

const mapDispatchToProps = (dispatch, { Module }) => ({
  removeTodo: payload => dispatch(Module.actions.removeTodo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
