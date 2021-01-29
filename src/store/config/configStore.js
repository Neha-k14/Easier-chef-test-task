import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import addDishReducer from '../reducers/addDish';

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            addDish: addDishReducer
        })
    );
    return store;
};

