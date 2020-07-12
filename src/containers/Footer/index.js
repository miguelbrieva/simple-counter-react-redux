import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTotal } from "../../reducers";
import "./styles.scss";

const Footer = ({ total }) => (
  <div className="footer">
    <p>
      Total: <span className="footer__total">{total}</span>
    </p>
  </div>
);

Footer.propTypes = {
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  total: getTotal(state),
});

export default connect(mapStateToProps)(Footer);
