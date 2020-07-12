import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterBySearch, clearSearch } from "../../actions/filterActions";
import ClearButton from "../../components/ClearButton";

import "./styles.scss";

class Search extends React.Component {
  handleOnChange = (e) => {
    let input = e.target.value;
    this.props.dispatch(filterBySearch(input));
  };

  handleOnClear = () => {
    this.props.dispatch(clearSearch());
  };

  render() {
    const { searchValue } = this.props;
    return (
      <div className="search">
        <div className="search__header">
          <p className="view-options__label">search</p>
          {searchValue !== "" && <ClearButton onClick={this.handleOnClear} />}
        </div>
        <div className="search__input">
          <input
            onChange={this.handleOnChange}
            type="text"
            placeholder="Search"
            value={searchValue}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  searchValue: state.filterReducer.searchValue,
});

export default connect(mapStateToProps)(Search);
