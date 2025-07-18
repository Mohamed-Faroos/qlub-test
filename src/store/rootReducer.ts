// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurants/index';

const rootReducer = combineReducers({
    restaurants: restaurantReducer,
});

export default rootReducer;