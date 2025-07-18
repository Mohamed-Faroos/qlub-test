// React Core components
import { Dimensions } from 'react-native';

// Third-party library
import Config from 'react-native-config';

/**
 * The function `getPlacePhotoUrl` generates a URL for a place photo using the Google Maps API response.
 */
export const getPlacePhotoUrl = (photoReference: string) => {
    if (!photoReference) {
        return '';
    }
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${Config.GOOGLE_API_KEY}`;
};

/** 
 *  Stores the width of the screen of the device. 
 * */
export const DeviceWidth = Dimensions.get('screen').width;
