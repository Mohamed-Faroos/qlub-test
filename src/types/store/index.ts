import { GET_RESTAURANTS } from '../../store/restaurants/types';
import { NearbySearchRequestProps } from '../services';

export interface RestaurantSuccessResponse {
    name: string;
    address: string;
    rating: number;
    latitude: number,
    longitude: number,
    imageUrl: string
}

export interface RestaurantErrorResponse {
    message?: string;
    statusCode?: number;
}

export interface GetRestaurantsAction {
    type: typeof GET_RESTAURANTS;
    payload: NearbySearchRequestProps;
}

export interface RestaurantsState {
    data: RestaurantSuccessResponse[];
    loading: boolean;
    error: RestaurantErrorResponse
}
