import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCounter } from "../../actions/counterActions";
import "./styles.scss";

class AddCounter extends React.Component {
  state = {
    value: "",
    showError: false,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      showError: false,
    });
  };

  handleOnFocus = () => {
    this.setState({ showError: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value.length) {
      this.props.dispatch(addCounter(value));
      this.setState({
        value: "",
        showError: false,
      });
    } else {
      this.setState({ showError: true });
    }
  };

  render() {
    const { value, showError } = this.state;
    return (
      <form className="add-counter" onSubmit={this.handleSubmit}>
        <input
          className={`add-counter__input ${
            showError && `add-counter__input--error`
          }`}
          type="text"
          placeholder={
            showError ? `You must provide a name` : `Type your counter name`
          }
          onChange={this.handleChange}
          onFocus={this.handleOnFocus}
          value={value}
        />
        <button className="add-counter__button" type="submit">
          Add
        </button>
      </form>
    );
  }
}

AddCounter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddCounter);
