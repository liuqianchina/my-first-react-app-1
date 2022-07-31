import { combineReducers } from 'redux';
import app from './app';
import user from './user';
import product from './product'

export default combineReducers({
    app,
    user,
    product,
});
