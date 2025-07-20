// Third-party libraries
import { AxiosError } from 'axios';
import { call, put } from 'redux-saga/effects';

// Constants and configurations
import { getNearByRestaurants } from '../../services';
import { getPlacePhotoUrl } from '../../utils';

// Props and Types
import {
    GET_RESTAURANTS,
    GET_RESTAURANTS_CLEAR,
    GET_RESTAURANTS_ERROR,
    GET_RESTAURANTS_SUCCESS,
} from './types';
import {
    GetRestaurantsAction,
    NearbySearchRequestProps,
    RestaurantErrorResponse,
    RestaurantSuccessResponse
} from '../../types';

/* Actions */
export const getRestaurants = (payload: NearbySearchRequestProps) => ({
    type: GET_RESTAURANTS,
    payload
});

export const getRestaurantsSuccess = (payload: RestaurantSuccessResponse[]) => ({
    type: GET_RESTAURANTS_SUCCESS,
    payload
});

export const getRestaurantsError = (payload: RestaurantErrorResponse) => ({
    type: GET_RESTAURANTS_ERROR,
    payload
});

export const getRestaurantsClear = () => ({
    type: GET_RESTAURANTS_CLEAR
});

/* Saga */
export function* getRestaurantsSaga(action: GetRestaurantsAction): Generator {
    try {
        const response = yield call(getNearByRestaurants, action.payload);
        if (response.status === 200) {
            /** 
             * Mapping and arrange needed restaurant detail and filtering with rating above 3.5
            */
            const mappedResult: RestaurantSuccessResponse[] = response.data?.results?.
                filter((place: any) => place?.rating > 3.5).
                map((place: any) => {
                    const imageUrl = getPlacePhotoUrl(place?.photos?.[0]?.photo_reference);
                    return {
                        name: place?.name,
                        address: place?.vicinity,
                        rating: place?.rating,
                        latitude: place?.geometry?.location?.lat,
                        longitude: place?.geometry?.location?.lng,
                        imageUrl: imageUrl
                    };
                });
            yield put(getRestaurantsSuccess(mappedResult));
        }
    } catch (err) {
        const axiosError = err as AxiosError;
        yield put(getRestaurantsError({
            message: axiosError.message,
            statusCode: axiosError.status ?? 400
        }));
    }
}
