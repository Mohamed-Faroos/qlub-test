// React core and React Native components
import { PermissionsAndroid, Platform } from 'react-native';

// Third-party libraries
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

// Props and Types
import { GeoLocation } from '../types';

const useGeoLocation = () => {
    /**
     * The function retrieves the current geolocation coordinates
     * and address, handling platform-specific permissions 
     */
    const getCurrentLocation = async (): Promise<GeoLocation> => {
        return new Promise<GeoLocation>((resolve) => {
            const handleLocation = () => {
                Geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;

                        /** 
                         * get current address using geo location 
                         */
                        Geocoder.from(latitude, longitude)
                            .then(json => {
                                const addressComponent = json.results[0].formatted_address;
                                resolve({
                                    latitude,
                                    longitude,
                                    address: addressComponent
                                });
                            })
                            .catch(error => {
                                console.warn(error);
                                resolve({
                                    latitude,
                                    longitude,
                                    address: ''
                                });
                            });
                    },
                    error => {
                        console.warn(error.message);
                        resolve({ latitude: null, longitude: null, address: '' });
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 1000
                    },
                );
            };

            if (Platform.OS === 'android') {
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                ).then(granted => {
                    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                        console.warn('Location permission denied');
                        resolve({ latitude: null, longitude: null, address: '' });
                        return;
                    }
                    handleLocation();
                });
            } else {
                handleLocation();
            }
        });
    };

    return { getCurrentLocation };
};

export default useGeoLocation;