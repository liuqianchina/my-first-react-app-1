import * as actions from "../constants/product";

const initialState = {
    productName: "",
    productNumber: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_PRODUCT: 
            return {
                ...state,
                ...action.product,
            };
        case actions.REMOVE_PRODUCT: 
            return {
                ...state,
                ...action.product,
            };
        default:
            return state;
    }
}

export default reducer;
