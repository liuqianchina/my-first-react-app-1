import * as actions from "../constants/app";

const initialState = {
    value: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT_VALUE: 
            return {
                ...state,
                value: state.value + action.payload,
            };
        case actions.DECREMENT_VALUE:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
