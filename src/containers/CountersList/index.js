import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Counter from "../../components/Counter";
import { getVisibleCounters } from "../../reducers";
import * as actions from "../../actions/counterActions";

import "./styles.scss";

class CounterList extends Component {
  componentDidMount() {
    this.props.getCounters();
  }

  insertContent = () => {
    const counters = this.props.visibleCounters;

    if (!counters.length) {
      return <p className="counters__no-counters">Nothing to count.</p>;
    }

    return counters.map((counter) => (
      <Counter
        key={counter.id}
        {...counter}
        deleteCounter={(id) => this.props.deleteCounter(id)}
        incrementCounter={(id) => this.props.incrementCounter(id)}
        decrementCounter={(id) => this.props.decrementCounter(id)}
      />
    ));
  };

  render() {
    return (
      <div className="counter-list">
        <div className="counters">{this.insertContent()}</div>
      </div>
    );
  }
}

CounterList.propTypes = {
  getCounters: PropTypes.func.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  visibleCounters: getVisibleCounters(state),
});

export default connect(mapStateToProps, actions)(CounterList);
