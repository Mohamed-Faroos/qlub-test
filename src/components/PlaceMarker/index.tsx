// React core and React Native components
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Third-Party libraries
import { Marker } from 'react-native-maps';

// Custom UI components
import { PlaceMarkerIcon } from '../../assets/icons';

// Constants and Configurations
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants/colors';

// Props and Types
import { PlaceMarkerProps } from '../../types';

const PlaceMarker: React.FC<PlaceMarkerProps> = (props) => {
    return (
        <Marker
            style={props.isSelected ? style.selectedMarkerContainer : style.markerContainer}
            coordinate={{
                latitude: props.restaurant.latitude,
                longitude: props.restaurant.longitude
            }}
            onPress={() => props.onSelectLocation(props.id)}
        >
            <TouchableOpacity
                style={props.isSelected ? style.selectedMarkerSubContainer : style.markerSubContainer}
            >
                <PlaceMarkerIcon width={20} height={20} />
                <View style={style.infoContainer}>
                    <Text style={style.placeRating} >
                        {props.restaurant.rating ? props.restaurant.rating.toFixed(1) : '0.0'}
                    </Text>
                    <Text style={style.placeName}>
                        {props.restaurant.name}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={props.isSelected ? style.selectedArrow : style.arrow} />
        </Marker>
    );
};

const style = StyleSheet.create({
    markerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:1
    },
    selectedMarkerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    markerSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: WHITE_COLOR,
        height: 40,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 40,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: PRIMARY_COLOR,
        elevation: 5,
    },
    selectedMarkerSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: WHITE_COLOR,
        height: 40,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
    },

    infoContainer: {
        paddingHorizontal: 6
    },
    placeRating: {
        fontSize: 11,
        fontWeight: 900
    },
    placeName: {
        fontSize: 11,
        fontWeight: 400
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: WHITE_COLOR,
    },
    selectedArrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: PRIMARY_COLOR,
    }
});

export default PlaceMarker;