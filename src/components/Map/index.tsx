import { View } from 'react-native';
import MapView, { MapStyleElement } from 'react-native-maps';
import CurrentLocationMarker from '../CurrentLocationMarker';
import PlaceMarker from '../PlaceMarker';

const Map = () => {

    const mapStyle: MapStyleElement[] = [
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

    

    return (
        <View style={{ flex: 1, paddingBottom: 100 }}>
            <MapView
                style={{ flex: 1 }}
                provider='google'
                mapType='standard'
                customMapStyle={mapStyle}
                zoomControlEnabled={true}
                zoomEnabled={true}
                zoomTapEnabled={true}

                initialRegion={{
                    latitude: 6.747790274300732,
                    longitude: 79.89973831760824,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }}
            >
                <CurrentLocationMarker />
                <PlaceMarker/>
            </MapView>
        </View>
    );
};

export default Map;