import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Checkbox = ({ children, onChange, active }) => (
  <label className="checkbox">
    <input type="checkbox" checked={active} onChange={onChange} />
    <div className="checkbox__label">{children}</div>
  </label>
);

Checkbox.propType = {
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Checkbox;
