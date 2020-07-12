import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getIsFiltering } from "../../reducers/filterReducer";
import "./styles.scss";

const FiltersButtonWithAlert = ({ isFiltering, onClick }) => {
  return (
    <button className="filters-button" onClick={onClick}>
      <div className="filters-button__svg">
        <div
          className={`filters-button__light ${
            isFiltering && "filters-button__light--on"
          }`}
        ></div>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
          </g>
        </svg>
      </div>
    </button>
  );
};

FiltersButtonWithAlert.propTypes = {
  isFiltering: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isFiltering: getIsFiltering(state.filterReducer),
  };
};

export default connect(mapStateToProps)(FiltersButtonWithAlert);
