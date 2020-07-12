import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  filterByMin,
  filterByMax,
  clearMinmax,
} from "../../actions/filterActions";
import ClearButton from "../../components/ClearButton";

import "./styles.scss";

class MinMax extends React.Component {
  handleOnChangeMin = (e) => {
    let value = e.target.value;
    this.props.dispatch(filterByMin(value));
  };
  handleOnChangeMax = (e) => {
    let value = e.target.value;
    this.props.dispatch(filterByMax(value));
  };
  handleOnClear = () => {
    this.props.dispatch(clearMinmax());
  };

  showClearButton = (min, max) =>
    min !== "" || max !== "" ? (
      <ClearButton onClick={this.handleOnClear} />
    ) : (
      ""
    );

  render() {
    const { minValue, maxValue } = this.props;
    return (
      <div className="minmax">
        <div className="minmax__header">
          <p className="view-options__label">Filter by amount</p>
          {this.showClearButton(minValue, maxValue)}
        </div>
        <div className="minmax__inputs">
          <div className="minmax__min">
            <input
              type="number"
              placeholder="min"
              onChange={this.handleOnChangeMin}
              value={minValue}
            />
          </div>
          <div className="minmax__max">
            <input
              type="number"
              placeholder="max"
              onChange={this.handleOnChangeMax}
              value={maxValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

MinMax.propTypes = {
  dispatch: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    minValue: state.filterReducer.min,
    maxValue: state.filterReducer.max,
  };
};

export default connect(mapStateToProps)(MinMax);
