/* React core and React Native components */
import { StyleSheet, Text, View } from 'react-native';

/* Third-Party libraries */
import { Marker } from 'react-native-maps';

/* Custom UI components */
import { PlaceMarkerIcon } from '../../assets/icons';

/* Constants and configs */
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants/colors';

const PlaceMarker = () => {
    return (
        <Marker style={style.markerContainer} coordinate={{ latitude: 6.797790274300732, longitude: 79.89973831760824 }}>
            <View style={style.markerSubContainer}>
                <PlaceMarkerIcon width={20} height={20} />
                <View style={style.infoContainer}>
                    <Text style={style.placeRating} >4.8</Text>
                    <Text style={style.placeName}>Quattro Cafe</Text>
                </View>
            </View>
            <View style={style.arrow} />
        </Marker>
    );
};

const style = StyleSheet.create({
    markerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
        elevation: 5
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
        borderColor: PRIMARY_COLOR
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