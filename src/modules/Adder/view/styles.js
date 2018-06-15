import styled from "styled-components";

const StyledAdder = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #444;
  width: 500px;
  padding: 1rem;
  margin: 0;

  input {
    background: none;
    border: none;
    outline: none;
    color: #444;
    width: 100%;
    padding: 0.5rem;

    ::placeholder {
      opacity: 1;
      color: #888;
    }
  }
`;

export { StyledAdder };
