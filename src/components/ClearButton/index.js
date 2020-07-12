import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ClearButton = ({ onClick }) => (
  <button className="clear-btn" onClick={onClick}>
    Clear
  </button>
);

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearButton;
