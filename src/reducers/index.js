import { combineReducers } from 'redux';
import app from './app';
import user from './user';
import product from './product';
import b from './teacher';

export default combineReducers({
    app,
    user,
    product,
    b,
});