import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { User } from '../components';
import * as actions from '../actions/user';

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators (
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(User);
