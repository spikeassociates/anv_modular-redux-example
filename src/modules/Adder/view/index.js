import React from "react";
import Modular from "modular-redux";

import { connect } from "react-redux";
import { StyledAdder } from "./styles";

class Adder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ ...this.state, value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledAdder>
          <input
            type="text"
            placeholder="Add a todo..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </StyledAdder>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { Module }) => ({
  addItem: payload => dispatch(Module.actions.addItem(payload))
});

export default Modular.view(
  connect(
    null,
    mapDispatchToProps
  )(Adder)
);
