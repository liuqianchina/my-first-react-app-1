import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { App } from '../components';
import * as actions from '../actions/app';

const mapStateToProps = state => ({
    app: state.app,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators (
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);
