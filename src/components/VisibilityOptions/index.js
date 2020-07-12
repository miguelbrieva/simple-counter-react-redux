import React from "react";
import Search from "../../containers/Search";
import MinMax from "../../containers/MinMax";
import SortBy from "../../containers/SortBy";
import ReverseOrder from "../../containers/ReverseOrder";
import FiltersButtonWithAlert from "../../containers/FiltersButtonWithAlert";
import { SORT_BY_TITLE, SORT_BY_AMOUNT } from "../../actions/sortActions";
import "./styles.scss";

class VisivilityOptions extends React.Component {
  state = {
    isVisible: false,
  };

  handleDropdown = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="view-options">
        <div className="view-options__header">
          <div className="view-options__header__alerts">Filters</div>
          <FiltersButtonWithAlert onClick={this.handleDropdown} />
        </div>
        <div
          className={`view-options__controls ${
            this.state.isVisible ? "view-options__controls--visible" : ""
          }`}
        >
          <div className="filters-wrapper">
            <Search />
            <MinMax />
          </div>
          <div className="sorter">
            <div className="sort-by">
              <p className="view-options__label">Sort by</p>

              <div className="sort-by__wrapper">
                <SortBy sorterType={SORT_BY_TITLE}>by title</SortBy>
                <SortBy sorterType={SORT_BY_AMOUNT}>by amount</SortBy>
              </div>
            </div>

            <div className="reverse-order">
              <p className="view-options__label">Order</p>
              <ReverseOrder>reverse</ReverseOrder>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisivilityOptions;
