// Third-party libraries
import axios from 'axios';

// Constants and Config
import { GET_NEARBY_RESTAURANTS_API_URL } from '../constants/apiUrl';

// Types and Props
import { NearbySearchRequestProps } from '../types';

export const getNearByRestaurants = async (payload: NearbySearchRequestProps) => {
    return await axios.get(GET_NEARBY_RESTAURANTS_API_URL, {
        params: {
            location: payload.location,
            radius: payload.radius,
            type: payload.type,
            key: payload.apiKey
        }
    });
};