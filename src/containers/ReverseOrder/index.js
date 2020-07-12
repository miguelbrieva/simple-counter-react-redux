import { connect } from "react-redux";
import { reverseAction } from "../../actions/sortActions";
import Checkbox from "../../components/Checkbox";

const mapStateToProps = (state) => ({
  active: state.sorterReducer.isReversed,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: () => dispatch(reverseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
