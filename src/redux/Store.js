import {createStore, combineReducers} from 'redux';
import booksReducer from './reducers/booksReducer';
import filterReducer from './reducers/filterReducer';

const reducers = combineReducers({
    booksPage: booksReducer,
    filterReducer
});

const store = createStore(reducers);

export default store;

window.store = store;
