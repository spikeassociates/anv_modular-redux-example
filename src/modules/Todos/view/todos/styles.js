import styled from "styled-components";

const StyledTodos = styled.div`
  color: #444;
  width: 500px;
  padding: 1rem;
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.05);
  font-weight: normal;

  header {
    color: #444;
    margin: 1rem 0 0rem;
    font-size: 1.8rem;
  }

  ul {
    padding: 0;
  }

  em {
    font-style: normal;
    font-size: 0.8rem;
    color: #aaa;
  }
`;

const Todo = styled.div`
  font-size: 0.8rem;
  color: 999;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  color: #888;
  background: none;
  outline: none;
  padding: 0rem;
  border-radius: 0.2rem;
  border: none;

  &:hover {
    cursor: pointer;
    color: #666;
  }
`;

export { Button, Todo, StyledTodos };
