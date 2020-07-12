import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Counter = (props) => (
  <div className="counter">
    <div className="counter__name">
      <p>{props.title}</p>
      <button
        className="counter__delete"
        onClick={() => props.deleteCounter(props.id)}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
    <div className="counter__count-wrapper">
      <button
        className="counter__button counter__button--min"
        onClick={() => props.decrementCounter(props.id)}
      >
        -
      </button>
      <div className="counter__count">{props.count}</div>
      <button
        className="counter__button counter__button--max"
        onClick={() => props.incrementCounter(props.id)}
      >
        +
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  deleteCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Counter;
