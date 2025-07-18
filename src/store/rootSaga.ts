import { takeLatest } from 'redux-saga/effects';
import { getRestaurantsSaga } from './restaurants/getRestaurants';
import { GET_RESTAURANTS } from './restaurants/types';

export default function* rootSaga() {
    yield takeLatest(GET_RESTAURANTS, getRestaurantsSaga);
}