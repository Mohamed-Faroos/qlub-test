// React core and React Native components
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Third-party libraries
import MapView from 'react-native-maps';

// Custom UI components
import CurrentLocationMarker from '../CurrentLocationMarker';
import PlaceMarker from '../PlaceMarker';

// Constants and Configurations
import { mapStyle } from '../../constants/mapStyle';

// Props and Types
import { MapProps, RestaurantsProps } from '../../types';

const Map: React.FC<MapProps> = (props) => {
    return (
        <View style={style.mapContainer}>
            <MapView
                ref={props.mapRef}
                style={style.map}
                provider='google'
                mapType='standard'
                customMapStyle={mapStyle}
                zoomControlEnabled={true}
                zoomEnabled={true}
                zoomTapEnabled={true}

                initialRegion={{
                    latitude: props.currentLocation.latitude,
                    longitude: props.currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.02,
                }}
            >
                {/* Render user current location marker */}
                <CurrentLocationMarker
                    latitude={props.currentLocation.latitude}
                    longitude={props.currentLocation.longitude}
                />

                {/* Render near by restaurant locations */}
                {
                    props.restaurants
                        .map((restaurant: RestaurantsProps, index: number) => (
                            <PlaceMarker
                                key={index}
                                id={index}
                                restaurant={restaurant}
                                isSelected={props.selectedLocation === index}
                                onSelectLocation={props.onSelectLocation}
                            />
                        ))
                }
            </MapView>
        </View>
    );
};

const style = StyleSheet.create({
    mapContainer: {
        flex: 1,
        paddingBottom: '50%'
    },
    map: {
        flex: 1
    }
});

export default Map;