import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Teacher } from "../components";
import * as actions from "../actions/teacher";

const mapStateToProps = state => ({
    a: state.b,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators (
        {
           ...actions,
        },
        dispatch,
     );

export default connect( mapStateToProps, mapDispatchToProps )(Teacher);