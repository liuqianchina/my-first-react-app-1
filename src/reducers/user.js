import * as actions from "../constants/user";

const initialState = {
    username: "",
    age: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_USER: 
            return {
                ...state,
                ...action.user,
            };
        case actions.REMOVE_USER: 
            return {
                ...state,
                ...action.user,
            };
        default:
            return state;
    }
}

export default reducer;
