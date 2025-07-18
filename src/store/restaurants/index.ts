// Types and Props
import { RestaurantsState } from '../../types';
import {
    GET_RESTAURANTS,
    GET_RESTAURANTS_CLEAR,
    GET_RESTAURANTS_ERROR,
    GET_RESTAURANTS_SUCCESS,
} from '../restaurants/types';

/** 
 * initial Restaurants state 
*/
const initialState: RestaurantsState = {
    data: [],
    loading: false,
    error: {}
};

export const restaurantReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                loading: true
            };
        case GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case GET_RESTAURANTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case GET_RESTAURANTS_CLEAR:
            return {
                ...state,
                data: [],
                error: {},
                loading: false
            };
        default:
            return state;
    }
};