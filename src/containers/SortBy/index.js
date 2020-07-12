import { connect } from "react-redux";
import { sortAction } from "../../actions/sortActions";
import Checkbox from "../../components/Checkbox";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.sorterType === state.sorterReducer.sortBy,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(sortAction(ownProps.sorterType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
