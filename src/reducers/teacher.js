import * as actions from '../constants/teacher';

const initialState = {
    teacherName: "",
    teacherAge: "",
};

const reducer = ( state=initialState, action ) => {
    console.log(state);
    console.log(action);
    switch ( action.type ) {
        case actions.ADD_TEACHER:
            return {
                ...state,
                ...action.teacher,
            };
        case actions.REMOVE_TEACHER:
            return {
                ...state,
                ...action.teacher,
            };
        default:
            return state;
    }
}

export default reducer;