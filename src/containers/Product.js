import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Product } from '../components';
import * as actions from '../actions/product';

const mapStateToProps = state => ({
    product: state.product,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators (
        {
            ...actions,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
