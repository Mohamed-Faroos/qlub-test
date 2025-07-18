// Third-party library
import { MapStyleElement } from 'react-native-maps';

export const mapStyle: MapStyleElement[] = [
    {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ visibility: 'on' }],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }],
    },
];